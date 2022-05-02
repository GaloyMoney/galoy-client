import {
  QueryResult,
  QueryHookOptions,
  useApolloClient,
  useQuery as useApolloQuery,
} from "@apollo/client"
import { useCallback, useState } from "react"

import main from "./queries/main"
import onChainTxFee from "./queries/on-chain-tx-fee"
import userDefaultWalletId from "./queries/user-default-wallet-id"
import btcPriceList from "./queries/btc-price-list"
import businessMapMarkers from "./queries/business-map-markers"
import quizQuestions from "./queries/quiz-questions"
import contacts from "./queries/contacts"
import getWalletCsvTransactions from "./queries/get-wallet-csv-transactions"
import transactionListForContact from "./queries/transaction-list-for-contact"
import transactionList from "./queries/transaction-list"
import usernameAvailable from "./queries/username-available"

import { GaloyGQL, joinErrorsMessages } from "../index"

export const QUERIES = {
  main,
  onChainTxFee,
  userDefaultWalletId,
  btcPriceList,
  businessMapMarkers,
  quizQuestions,
  contacts,
  getWalletCsvTransactions,
  transactionListForContact,
  transactionList,
  usernameAvailable,
}

type QueryHelpers = {
  errorsMessage?: string
}

const useQueryWrapper = <TData = unknown, TVars = unknown>(
  queryName: keyof typeof QUERIES,
  config?: QueryHookOptions<TData, TVars>,
): QueryResult<TData, TVars> & QueryHelpers => {
  const result = useApolloQuery<TData, TVars>(QUERIES[queryName], config)

  const { data, error } = result
  const errors = (data as any)?.[queryName]?.errors
  const errorsMessage = error?.message || joinErrorsMessages(errors)

  return { ...result, errorsMessage }
}

const onChainTxFeeQuery = (
  config?: QueryHookOptions<
    GaloyGQL.OnChainTxFeeQuery,
    GaloyGQL.OnChainTxFeeQueryVariables
  >,
): QueryResult<GaloyGQL.OnChainTxFeeQuery, GaloyGQL.OnChainTxFeeQueryVariables> &
  QueryHelpers => {
  return useQueryWrapper<GaloyGQL.OnChainTxFeeQuery, GaloyGQL.OnChainTxFeeQueryVariables>(
    "onChainTxFee",
    config,
  )
}

const mainQuery = (
  config?: QueryHookOptions<GaloyGQL.MainQuery, GaloyGQL.MainQueryVariables>,
): QueryResult<GaloyGQL.MainQuery, GaloyGQL.MainQueryVariables> & QueryHelpers => {
  return useQueryWrapper<GaloyGQL.MainQuery, GaloyGQL.MainQueryVariables>("main", config)
}

const transactionListQuery = (
  config?: QueryHookOptions<
    GaloyGQL.TransactionListQuery,
    GaloyGQL.TransactionListQueryVariables
  >,
): QueryResult<GaloyGQL.TransactionListQuery> & QueryHelpers => {
  return useQueryWrapper<
    GaloyGQL.TransactionListQuery,
    GaloyGQL.TransactionListQueryVariables
  >("transactionList", config)
}

const contactsQuery = (
  config?: QueryHookOptions<GaloyGQL.ContactsQuery, GaloyGQL.ContactsQueryVariables>,
): QueryResult<GaloyGQL.ContactsQuery, GaloyGQL.ContactsQueryVariables> &
  QueryHelpers => {
  return useQueryWrapper<GaloyGQL.ContactsQuery, GaloyGQL.ContactsQueryVariables>(
    "contacts",
    config,
  )
}

const transactionListForContactQuery = (
  config?: QueryHookOptions<
    GaloyGQL.TransactionListForContactQuery,
    GaloyGQL.TransactionListForContactQueryVariables
  >,
): QueryResult<
  GaloyGQL.TransactionListForContactQuery,
  GaloyGQL.TransactionListForContactQueryVariables
> &
  QueryHelpers => {
  return useQueryWrapper<
    GaloyGQL.TransactionListForContactQuery,
    GaloyGQL.TransactionListForContactQueryVariables
  >("transactionListForContact", config)
}

export const useQuery = {
  main: mainQuery,
  onChainTxFee: onChainTxFeeQuery,
  transactionList: transactionListQuery,
  contacts: contactsQuery,
  transactionListForContact: transactionListForContactQuery,
}

// ********** DELAYED QUERIES ********** //

const useDelayedQueryWrapper = <TData = unknown, TVars = unknown>(
  queryName: keyof typeof QUERIES,
): [(variables?: TVars) => QueryResult<TData> & QueryHelpers, { loading: boolean }] => {
  const client = useApolloClient()
  const [loading, setLoading] = useState<boolean>(false)

  const sendQuery = useCallback(
    async (variables: TVars) => {
      setLoading(true)
      try {
        const result = await client.query({
          query: QUERIES[queryName],
          variables,
        })
        setLoading(false)
        const { data, error } = result
        const errors = (data as any)?.[queryName]?.errors
        const errorsMessage = error?.message || joinErrorsMessages(errors)

        return { ...result, loading, errorsMessage }
      } catch (err: any) {
        setLoading(false)
        return Promise.resolve({
          networkStatus: "ERROR",
          data: undefined,
          error: err,
          loading,
          errorsMessage: err?.message || "Something went wrong",
        })
      }
    },
    [client, queryName],
  )

  return [
    sendQuery as unknown as (variables?: TVars) => QueryResult<TData> & QueryHelpers,
    { loading },
  ]
}

const userDefaultWalletIdDelayedQuery = () => {
  return useDelayedQueryWrapper<
    GaloyGQL.UserDefaultWalletIdQuery,
    GaloyGQL.UserDefaultWalletIdQueryVariables
  >("userDefaultWalletId")
}

const transactionListDelayedQuery = () => {
  return useDelayedQueryWrapper<
    GaloyGQL.TransactionListQuery,
    GaloyGQL.TransactionListQueryVariables
  >("transactionList")
}

const transactionListForContactDelayedQuery = () => {
  return useDelayedQueryWrapper<
    GaloyGQL.TransactionListForContactQuery,
    GaloyGQL.TransactionListForContactQueryVariables
  >("transactionListForContact")
}

export const useDelayedQuery = {
  userDefaultWalletId: userDefaultWalletIdDelayedQuery,
  transactionList: transactionListDelayedQuery,
  transactionListForContact: transactionListForContactDelayedQuery,
}
