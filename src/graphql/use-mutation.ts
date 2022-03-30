import {
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation as useApolloMutation,
} from "@apollo/client"
import { useCallback } from "react"

import { GaloyGQL, joinErrorsMessages } from "../index"

import captchaCreateChallenge from "./mutations/captcha-create-challenge"
import captchaRequestAuthCode from "./mutations/captcha-request-auth-code"
import deviceNotificationTokenCreate from "./mutations/device-notification-token-create"
import intraLedgerPaymentSend from "./mutations/intra-ledger-paymest-send"
import lnInvoiceCreate from "./mutations/ln-invoice-create"
import lnInvoiceFeeProbe from "./mutations/ln-invoice-fee-probe"
import lnInvoicePaymentSend from "./mutations/ln-invoice-payment-send"
import lnNoAmountInvoiceCreate from "./mutations/ln-no-amount-invoice-create"
import lnNoAmountInvoiceFeeProbe from "./mutations/ln-no-amount-invoice-fee-probe"
import lnNoAmountInvoicePaymentSend from "./mutations/ln-no-amount-invoice-payment-send"
import lnNoAmountUsdInvoicePaymentSend from "./mutations/ln-no-amount-usd-invoice-payment-send"
import lnUsdInvoiceCreate from "./mutations/ln-usd-invoice-create"
import lnUsdInvoiceCreateOnBehalfOfRecipient from "./mutations/ln-usd-invoice-create-on-behalf-of-recipient"
import onChainAddressCurrent from "./mutations/on-chain-address-current"
import onChainPaymentSend from "./mutations/on-chain-payment-send"
import userContactUpdateAlias from "./mutations/user-contact-update-alias"
import userLogin from "./mutations/user-login"
import userQuizQuestionUpdateCompleted from "./mutations/user-quiz-question-update-completed"
import userUpdateLanguage from "./mutations/user-update-language"
import userUpdateUsername from "./mutations/user-update-username"

export const MUTATIONS = {
  captchaCreateChallenge,
  captchaRequestAuthCode,
  deviceNotificationTokenCreate,
  intraLedgerPaymentSend,
  lnInvoiceCreate,
  lnInvoiceFeeProbe,
  lnInvoicePaymentSend,
  lnNoAmountInvoiceCreate,
  lnNoAmountInvoiceFeeProbe,
  lnNoAmountInvoicePaymentSend,
  lnNoAmountUsdInvoicePaymentSend,
  lnUsdInvoiceCreate,
  lnUsdInvoiceCreateOnBehalfOfRecipient,
  onChainAddressCurrent,
  onChainPaymentSend,
  userContactUpdateAlias,
  userLogin,
  userQuizQuestionUpdateCompleted,
  userUpdateLanguage,
  userUpdateUsername,
}

type MutationHelpers = {
  errorsMessage?: string
}

const useMutationWrapper = <TData = unknown, TVars = unknown, TFunc = unknown>(
  mutationName: keyof typeof MUTATIONS,
  config?: MutationHookOptions<TData, TVars>,
): [TFunc, MutationResult<TData> & MutationHelpers] => {
  const [mutationFunction, result] = useApolloMutation<TData, TVars>(
    MUTATIONS[mutationName],
    config,
  )

  const errors = (result?.data as any)?.[mutationName]?.errors
  const errorsMessage = result?.error?.message || joinErrorsMessages(errors)

  const sendMutation = useCallback(
    async (...args) => {
      const mutationResult = await mutationFunction(...args)
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

const captchaCreateChallengeMutation = defineMutation<
  GaloyGQL.CaptchaCreateChallengeMutation,
  GaloyGQL.CaptchaCreateChallengeMutationVariables
>("captchaCreateChallenge")

const captchaRequestAuthCodeMutation = defineMutation<
  GaloyGQL.CaptchaRequestAuthCodeMutation,
  GaloyGQL.CaptchaRequestAuthCodeMutationVariables
>("captchaRequestAuthCode")

const onChainAddressCurrentMutation = defineMutation<
  GaloyGQL.OnChainAddressCurrentMutation,
  GaloyGQL.OnChainAddressCurrentMutationVariables
>("onChainAddressCurrent")

const lnInvoiceCreateMutation = defineMutation<
  GaloyGQL.LnInvoiceCreateMutation,
  GaloyGQL.LnInvoiceCreateMutationVariables
>("lnInvoiceCreate")

const lnNoAmountInvoiceCreateMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoiceCreateMutation,
  GaloyGQL.LnNoAmountInvoiceCreateMutationVariables
>("lnNoAmountInvoiceCreate")

const intraLedgerPaymentSendMutation = defineMutation<
  GaloyGQL.IntraLedgerPaymentSendMutation,
  GaloyGQL.IntraLedgerPaymentSendMutationVariables
>("intraLedgerPaymentSend")

const lnInvoicePaymentSendMutation = defineMutation<
  GaloyGQL.LnInvoicePaymentSendMutation,
  GaloyGQL.LnInvoicePaymentSendMutationVariables
>("lnInvoicePaymentSend")

const lnInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnInvoiceFeeProbeMutation,
  GaloyGQL.LnInvoiceFeeProbeMutationVariables
>("lnInvoiceFeeProbe")

const lnNoAmountInvoicePaymentSendMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoicePaymentSendMutation,
  GaloyGQL.LnNoAmountInvoicePaymentSendMutationVariables
>("lnNoAmountInvoicePaymentSend")

const lnNoAmountInvoiceFeeProbeMutation = defineMutation<
  GaloyGQL.LnNoAmountInvoiceFeeProbeMutation,
  GaloyGQL.LnNoAmountInvoiceFeeProbeMutationVariables
>("lnNoAmountInvoiceFeeProbe")

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

const onChainPaymentSendMutation = defineMutation<
  GaloyGQL.OnChainPaymentSendMutation,
  GaloyGQL.OnChainPaymentSendMutationVariables
>("onChainPaymentSend")

const userUpdateLanguageMutation = defineMutation<
  GaloyGQL.UserUpdateLanguageMutation,
  GaloyGQL.UserUpdateLanguageMutationVariables
>("userUpdateLanguage")

const userUpdateUsernameMutation = defineMutation<
  GaloyGQL.UserUpdateUsernameMutation,
  GaloyGQL.UserUpdateUsernameMutationVariables
>("userUpdateUsername")

export const useMutation = {
  captchaCreateChallenge: captchaCreateChallengeMutation,
  captchaRequestAuthCode: captchaRequestAuthCodeMutation,
  intraLedgerPaymentSend: intraLedgerPaymentSendMutation,
  lnInvoiceCreate: lnInvoiceCreateMutation,
  lnInvoiceFeeProbe: lnInvoiceFeeProbeMutation,
  lnInvoicePaymentSend: lnInvoicePaymentSendMutation,
  lnNoAmountInvoiceCreate: lnNoAmountInvoiceCreateMutation,
  lnNoAmountInvoiceFeeProbe: lnNoAmountInvoiceFeeProbeMutation,
  lnNoAmountInvoicePaymentSend: lnNoAmountInvoicePaymentSendMutation,
  lnNoAmountUsdInvoicePaymentSend: lnNoAmountUsdInvoicePaymentSendMutation,
  lnUsdInvoiceCreate: lnUsdInvoiceCreateMutation,
  lnUsdInvoiceCreateOnBehalfOfRecipient: lnUsdInvoiceCreateOnBehalfOfRecipientMutation,
  onChainAddressCurrent: onChainAddressCurrentMutation,
  onChainPaymentSend: onChainPaymentSendMutation,
  userUpdateLanguage: userUpdateLanguageMutation,
  userUpdateUsername: userUpdateUsernameMutation,
}
