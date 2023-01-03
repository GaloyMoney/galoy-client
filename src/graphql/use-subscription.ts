import {
  useSubscription as useApolloSubscription,
  SubscriptionHookOptions,
  SubscriptionResult,
} from "@apollo/client"

import { GaloyGQL, joinErrorsMessages } from "../index"
import { SUBSCRIPTIONS } from "./import"

type SubscriptionHelpers = {
  errorsMessage?: string
}

const useSubscriptionWrapper = <TData = unknown, TVars = unknown>(
  subscriptionName: keyof typeof SUBSCRIPTIONS,
  config?: SubscriptionHookOptions<TData, TVars>,
): SubscriptionResult<TData> & SubscriptionHelpers => {
  const result = useApolloSubscription<TData, TVars>(
    SUBSCRIPTIONS[subscriptionName] as DocumentNode,
    config,
  )

  const { data, error } = result
  const errors = (data as any)?.[subscriptionName]?.errors
  const errorsMessage = error?.message || joinErrorsMessages(errors)

  return { ...result, errorsMessage }
}

const myUpdatesSubscription = (
  config?: SubscriptionHookOptions<
    GaloyGQL.MyUpdatesSubscription,
    GaloyGQL.MyUpdatesSubscriptionVariables
  >,
): SubscriptionResult<GaloyGQL.MyUpdatesSubscription> & SubscriptionHelpers => {
  return useSubscriptionWrapper<
    GaloyGQL.MyUpdatesSubscription,
    GaloyGQL.MyUpdatesSubscriptionVariables
  >("myUpdates", config)
}

const lnInvoicePaymentStatusSubscription = (
  config?: SubscriptionHookOptions<
    GaloyGQL.LnInvoicePaymentStatusSubscription,
    GaloyGQL.LnInvoicePaymentStatusSubscriptionVariables
  >,
): SubscriptionResult<GaloyGQL.LnInvoicePaymentStatusSubscription> &
  SubscriptionHelpers => {
  return useSubscriptionWrapper<
    GaloyGQL.LnInvoicePaymentStatusSubscription,
    GaloyGQL.LnInvoicePaymentStatusSubscriptionVariables
  >("lnInvoicePaymentStatus", config)
}

export const useSubscription = {
  myUpdates: myUpdatesSubscription,
  lnInvoicePaymentStatus: lnInvoicePaymentStatusSubscription,
}
