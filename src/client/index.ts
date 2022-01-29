import "cross-fetch/polyfill" // The Apollo client depends on fetch

import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
  split,
  NormalizedCacheObject,
  createHttpLink,
  useApolloClient,
} from "@apollo/client"
import { ErrorLink, onError } from "@apollo/client/link/error"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"

export { ApolloProvider as GaloyProvider } from "@apollo/client"
export type { NormalizedCacheObject } from "@apollo/client"

export { renderToStringWithData } from "@apollo/client/react/ssr"
export { MockedProvider } from "@apollo/client/testing"

export type { ApolloClient as GaloyClient } from "@apollo/client"

export const useResetClient = () => {
  const client = useApolloClient()
  return () => {
    client.clearStore()
  }
}

export const postRequest =
  (authToken: string | undefined) =>
  async (path: string, variables: Record<string, string | number | boolean> = {}) => {
    try {
      const response = await fetch(path, {
        method: "post",
        body: JSON.stringify(variables),
        headers: {
          "Content-Type": "application/json",
          "authorization": authToken ? `Bearer ${authToken}` : "",
        },
      })

      const data = await response.json()

      return data.error ? new Error(data.error) : data
    } catch (err) {
      return err
    }
  }

const defaultErrorCallback: ErrorLink.ErrorHandler = ({
  graphQLErrors,
  networkError,
}) => {
  if (graphQLErrors) {
    console.debug("[GraphQL errors]:", graphQLErrors)
  }
  if (networkError) {
    console.debug("[Network error]:", networkError)
  }
}

export type CreateGaloyClientFunction = (argW: {
  config: Record<string, any>
  initData?: NormalizedCacheObject
}) => (arg?: {
  authToken?: string
  headers?: Record<string, string | Array<string> | undefined>
  onError?: ErrorLink.ErrorHandler
}) => ApolloClient<NormalizedCacheObject>

export const createGaloyClient: CreateGaloyClientFunction =
  ({ config, initData }) =>
  ({ authToken, onError: onErrorCallback } = {}) => {
    const cache = initData ? new InMemoryCache().restore(initData) : new InMemoryCache()
    const errorLink = onError(onErrorCallback ?? defaultErrorCallback)

    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }: { headers: Record<string, string> }) => ({
        headers: {
          authorization: authToken ? `Bearer ${authToken}` : "",
          ...headers,
        },
      }))
      return forward(operation)
    })

    const httpLink = new HttpLink({ uri: config.graphqlUri })

    const wsLink = new WebSocketLink({
      uri: config.graphqlSubscriptionUri,
      options: {
        reconnect: true,
        reconnectionAttempts: 3,
        lazy: true,
        connectionParams: async () => {
          return {
            authorization: authToken ? `Bearer ${authToken}` : "",
          }
        },
      },
    })

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        )
      },
      wsLink,
      from([errorLink, authLink, httpLink]),
    )

    return new ApolloClient({
      cache,
      link: splitLink,
    })
  }

export const createGaloyServerClient: CreateGaloyClientFunction =
  ({ config }) =>
  ({ authToken, headers } = {}) => {
    return new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: config.graphqlUri,
        headers: {
          "authorization": authToken ? `Bearer ${authToken}` : "",
          "x-real-ip": headers?.["x-real-ip"],
          "x-forwarded-for": headers?.["x-forwarded-for"],
        },
      }),
      cache: new InMemoryCache(),
    })
  }
