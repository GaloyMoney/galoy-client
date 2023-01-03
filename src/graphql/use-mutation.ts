import {
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation as useApolloMutation,
} from "@apollo/client"
import { useCallback } from "react"

import { GaloyGQL, joinErrorsMessages } from "../index"
import { MUTATIONS } from "./import"
import { DocumentNode } from "graphql"

type MutationHelpers = {
  errorsMessage?: string
}

const useMutationWrapper = <TData = unknown, TVars = unknown, TFunc = unknown>(
  mutationName: keyof typeof MUTATIONS,
  config?: MutationHookOptions<TData, TVars>,
): [TFunc, MutationResult<TData> & MutationHelpers] => {
  const [mutationFunction, result] = useApolloMutation<TData, TVars>(
    MUTATIONS[mutationName] as unknown as DocumentNode,
    config,
  )

  const errors = (result?.data as any)?.[mutationName]?.errors
  const errorsMessage = result?.error?.message || joinErrorsMessages(errors)

  const sendMutation = useCallback(
    async (options?: MutationFunctionOptions<TData, TVars>) => {
      const mutationResult = await mutationFunction(options)
      const mutationErrors = (mutationResult?.data as any)?.[mutationName]?.errors
      const mutationErrorsMessage =
        result?.error?.message || joinErrorsMessages(mutationErrors)
      return { ...mutationResult, errorsMessage: mutationErrorsMessage }
    },
    [mutationFunction, mutationName],
  )

  return [sendMutation as unknown as TFunc, { ...result, errorsMessage }]
}

type MutationFunction<TData, TVars> = (
  options?: MutationFunctionOptions<TData, TVars>,
) => Promise<MutationResult<TData> & MutationHelpers>

const defineMutation = <TData, TVars>(name: keyof typeof MUTATIONS) => {
  return (
    config?: MutationHookOptions<TData, TVars>,
  ): [MutationFunction<TData, TVars>, MutationResult<TData> & MutationHelpers] => {
    return useMutationWrapper<TData, TVars, MutationFunction<TData, TVars>>(name, config)
  }
}

const accountUpdateDefaultWalletIdMutation = defineMutation<
  GaloyGQL.AccountUpdateDefaultWalletIdMutation,
  GaloyGQL.AccountUpdateDefaultWalletIdMutationVariables
>("accountUpdateDefaultWalletId")

const userLoginUpgradeMutation = defineMutation<
  GaloyGQL.UserLoginUpgradeMutation,
  GaloyGQL.UserLoginUpgradeMutationVariables
>("userLoginUpgrade")

const userDeviceAccountCreateMutation = defineMutation<
  GaloyGQL.UserDeviceAccountCreateMutation,
  GaloyGQL.UserDeviceAccountCreateMutationVariables
>("userDeviceAccountCreate")

const captchaCreateChallengeMutation = defineMutation<
  GaloyGQL.CaptchaCreateChallengeMutation,
  GaloyGQL.CaptchaCreateChallengeMutationVariables
>("captchaCreateChallenge")

const captchaRequestAuthCodeMutation = defineMutation<
  GaloyGQL.CaptchaRequestAuthCodeMutation,
  GaloyGQL.CaptchaRequestAuthCodeMutationVariables
>("captchaRequestAuthCode")

const deviceNotificationTokenCreateMutation = defineMutation<
  GaloyGQL.DeviceNotificationTokenCreateMutation,
  GaloyGQL.DeviceNotificationTokenCreateMutationVariables
>("deviceNotificationTokenCreate")

const intraLedgerPaymentSendMutation = defineMutation<
  GaloyGQL.IntraLedgerPaymentSendMutation,
  GaloyGQL.IntraLedgerPaymentSendMutationVariables
>("intraLedgerPaymentSend")

const intraLedgerUsdPaymentSendMutation = defineMutation<
  GaloyGQL.IntraLedgerUsdPaymentSendMutation,
  GaloyGQL.IntraLedgerUsdPaymentSendMutationVariables
>("intraLedgerUsdPaymentSend")

const lnInvoiceCreateMutation = defineMutation<
  GaloyGQL.LnInvoiceCreateMutation,
  GaloyGQL.LnInvoiceCreateMutationVariables
>("lnInvoiceCreate")

const lnInvoiceCreateOnBehalfOfRecipientMutation = defineMutation<
  GaloyGQL.LnInvoiceCreateOnBehalfOfRecipientMutation,
  GaloyGQL.LnInvoiceCreateOnBehalfOfRecipientMutationVariables
>("lnInvoiceCreateOnBehalfOfRecipient")

const lnInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnInvoiceFeeProbeMutation,
  GaloyGQL.LnInvoiceFeeProbeMutationVariables
>("lnInvoiceFeeProbe")

const lnInvoicePaymentSendMutation = defineMutation<
  GaloyGQL.LnInvoicePaymentSendMutation,
  GaloyGQL.LnInvoicePaymentSendMutationVariables
>("lnInvoicePaymentSend")

const lnNoAmountInvoiceCreateMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoiceCreateMutation,
  GaloyGQL.LnNoAmountInvoiceCreateMutationVariables
>("lnNoAmountInvoiceCreate")

const lnNoAmountInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoiceFeeProbeMutation,
  GaloyGQL.LnNoAmountInvoiceFeeProbeMutationVariables
>("lnNoAmountInvoiceFeeProbe")

const lnNoAmountInvoicePaymentSendMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoicePaymentSendMutation,
  GaloyGQL.LnNoAmountInvoicePaymentSendMutationVariables
>("lnNoAmountInvoicePaymentSend")

const lnNoAmountUsdInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnNoAmountUsdInvoiceFeeProbeMutation,
  GaloyGQL.LnNoAmountUsdInvoiceFeeProbeMutationVariables
>("lnNoAmountUsdInvoiceFeeProbe")

const lnNoAmountUsdInvoicePaymentSendMutation = defineMutation<
  GaloyGQL.LnNoAmountUsdInvoicePaymentSendMutation,
  GaloyGQL.LnNoAmountUsdInvoicePaymentSendMutationVariables
>("lnNoAmountUsdInvoicePaymentSend")

const lnUsdInvoiceCreateMutation = defineMutation<
  GaloyGQL.LnUsdInvoiceCreateMutation,
  GaloyGQL.LnUsdInvoiceCreateMutationVariables
>("lnUsdInvoiceCreate")

const lnUsdInvoiceCreateOnBehalfOfRecipientMutation = defineMutation<
  GaloyGQL.LnUsdInvoiceCreateOnBehalfOfRecipientMutation,
  GaloyGQL.LnUsdInvoiceCreateOnBehalfOfRecipientMutationVariables
>("lnUsdInvoiceCreateOnBehalfOfRecipient")

const lnUsdInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnUsdInvoiceFeeProbeMutation,
  GaloyGQL.LnUsdInvoiceFeeProbeMutationVariables
>("lnUsdInvoiceFeeProbe")

const onChainAddressCurrentMutation = defineMutation<
  GaloyGQL.OnChainAddressCurrentMutation,
  GaloyGQL.OnChainAddressCurrentMutationVariables
>("onChainAddressCurrent")

const onChainPaymentSendMutation = defineMutation<
  GaloyGQL.OnChainPaymentSendMutation,
  GaloyGQL.OnChainPaymentSendMutationVariables
>("onChainPaymentSend")

const userContactUpdateAliasMutation = defineMutation<
  GaloyGQL.UserContactUpdateAliasMutation,
  GaloyGQL.UserContactUpdateAliasMutationVariables
>("userContactUpdateAlias")

const userLoginMutation = defineMutation<
  GaloyGQL.UserLoginMutation,
  GaloyGQL.UserLoginMutationVariables
>("userLogin")

const userQuizQuestionUpdateCompletedMutation = defineMutation<
  GaloyGQL.UserQuizQuestionUpdateCompletedMutation,
  GaloyGQL.UserQuizQuestionUpdateCompletedMutationVariables
>("userQuizQuestionUpdateCompleted")

const userUpdateLanguageMutation = defineMutation<
  GaloyGQL.UserUpdateLanguageMutation,
  GaloyGQL.UserUpdateLanguageMutationVariables
>("userUpdateLanguage")

const userUpdateUsernameMutation = defineMutation<
  GaloyGQL.UserUpdateUsernameMutation,
  GaloyGQL.UserUpdateUsernameMutationVariables
>("userUpdateUsername")

export const useMutation = {
  accountUpdateDefaultWalletId: accountUpdateDefaultWalletIdMutation,
  userLoginUpgrade: userLoginUpgradeMutation,
  userDeviceAccountCreate: userDeviceAccountCreateMutation,
  captchaCreateChallenge: captchaCreateChallengeMutation,
  captchaRequestAuthCode: captchaRequestAuthCodeMutation,
  deviceNotificationTokenCreate: deviceNotificationTokenCreateMutation,
  intraLedgerPaymentSend: intraLedgerPaymentSendMutation,
  intraLedgerUsdPaymentSend: intraLedgerUsdPaymentSendMutation,
  lnInvoiceCreate: lnInvoiceCreateMutation,
  lnInvoiceCreateOnBehalfOfRecipient: lnInvoiceCreateOnBehalfOfRecipientMutation,
  lnInvoiceFeeProbe: lnInvoiceFeeProbeMutation,
  lnInvoicePaymentSend: lnInvoicePaymentSendMutation,
  lnNoAmountInvoiceCreate: lnNoAmountInvoiceCreateMutation,
  lnNoAmountInvoiceFeeProbe: lnNoAmountInvoiceFeeProbeMutation,
  lnNoAmountInvoicePaymentSend: lnNoAmountInvoicePaymentSendMutation,
  lnNoAmountUsdInvoiceFeeProbe: lnNoAmountUsdInvoiceFeeProbeMutation,
  lnNoAmountUsdInvoicePaymentSend: lnNoAmountUsdInvoicePaymentSendMutation,
  lnUsdInvoiceCreate: lnUsdInvoiceCreateMutation,
  lnUsdInvoiceCreateOnBehalfOfRecipient: lnUsdInvoiceCreateOnBehalfOfRecipientMutation,
  lnUsdInvoiceFeeProbe: lnUsdInvoiceFeeProbeMutation,
  onChainAddressCurrent: onChainAddressCurrentMutation,
  onChainPaymentSend: onChainPaymentSendMutation,
  userContactUpdateAlias: userContactUpdateAliasMutation,
  userLogin: userLoginMutation,
  userQuizQuestionUpdateCompleted: userQuizQuestionUpdateCompletedMutation,
  userUpdateLanguage: userUpdateLanguageMutation,
  userUpdateUsername: userUpdateUsernameMutation,
}
