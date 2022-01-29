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
import onChainAddressCurrent from "./mutations/on-chain-address-current"
import onChainPaymentSend from "./mutations/on-chain-payment-send"
import userContactUpdateAlias from "./mutations/user-contact-update-alias"
import userLogin from "./mutations/user-login"
import userQuizQuestionUpdateCompleted from "./mutations/user-quiz-question-update-completed"
import userUpdateLanguage from "./mutations/user-update-language"

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
  onChainAddressCurrent,
  onChainPaymentSend,
  userContactUpdateAlias,
  userLogin,
  userQuizQuestionUpdateCompleted,
  userUpdateLanguage,
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

type CaptchaCreateChallengeFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.CaptchaCreateChallengeMutation,
    GaloyGQL.CaptchaCreateChallengeMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.CaptchaCreateChallengeMutation> & MutationHelpers>

const captchaCreateChallengeMutation = (
  config?: MutationHookOptions<
    GaloyGQL.CaptchaCreateChallengeMutation,
    GaloyGQL.CaptchaCreateChallengeMutationVariables
  >,
): [
  CaptchaCreateChallengeFunction,
  MutationResult<GaloyGQL.CaptchaCreateChallengeMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.CaptchaCreateChallengeMutation,
    GaloyGQL.CaptchaCreateChallengeMutationVariables,
    CaptchaCreateChallengeFunction
  >("captchaCreateChallenge", config)
}

type CaptchaRequestAuthCodeFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.CaptchaRequestAuthCodeMutation,
    GaloyGQL.CaptchaRequestAuthCodeMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.CaptchaRequestAuthCodeMutation> & MutationHelpers>

const captchaRequestAuthCodeMutation = (
  config?: MutationHookOptions<
    GaloyGQL.CaptchaRequestAuthCodeMutation,
    GaloyGQL.CaptchaRequestAuthCodeMutationVariables
  >,
): [
  CaptchaRequestAuthCodeFunction,
  MutationResult<GaloyGQL.CaptchaRequestAuthCodeMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.CaptchaRequestAuthCodeMutation,
    GaloyGQL.CaptchaRequestAuthCodeMutationVariables,
    CaptchaRequestAuthCodeFunction
  >("captchaRequestAuthCode", config)
}

type OnChainAddressCurrentFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.OnChainAddressCurrentMutation,
    GaloyGQL.OnChainAddressCurrentMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.OnChainAddressCurrentMutation> & MutationHelpers>

const onChainAddressCurrentMutation = (
  config?: MutationHookOptions<
    GaloyGQL.OnChainAddressCurrentMutation,
    GaloyGQL.OnChainAddressCurrentMutationVariables
  >,
): [
  OnChainAddressCurrentFunction,
  MutationResult<GaloyGQL.OnChainAddressCurrentMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.OnChainAddressCurrentMutation,
    GaloyGQL.OnChainAddressCurrentMutationVariables,
    OnChainAddressCurrentFunction
  >("onChainAddressCurrent", config)
}

type LnInvoiceCreateFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnInvoiceCreateMutation,
    GaloyGQL.LnInvoiceCreateMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.LnInvoiceCreateMutation> & MutationHelpers>

const lnInvoiceCreateMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnInvoiceCreateMutation,
    GaloyGQL.LnInvoiceCreateMutationVariables
  >,
): [
  LnInvoiceCreateFunction,
  MutationResult<GaloyGQL.LnInvoiceCreateMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnInvoiceCreateMutation,
    GaloyGQL.LnInvoiceCreateMutationVariables,
    LnInvoiceCreateFunction
  >("lnInvoiceCreate", config)
}

type LnNoAmountInvoiceCreateFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnNoAmountInvoiceCreateMutation,
    GaloyGQL.LnNoAmountInvoiceCreateMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.LnNoAmountInvoiceCreateMutation> & MutationHelpers>

const lnNoAmountInvoiceCreateMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnNoAmountInvoiceCreateMutation,
    GaloyGQL.LnNoAmountInvoiceCreateMutationVariables
  >,
): [
  LnNoAmountInvoiceCreateFunction,
  MutationResult<GaloyGQL.LnNoAmountInvoiceCreateMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnNoAmountInvoiceCreateMutation,
    GaloyGQL.LnNoAmountInvoiceCreateMutationVariables,
    LnNoAmountInvoiceCreateFunction
  >("lnNoAmountInvoiceCreate", config)
}

type IntraLedgerPaymentSendFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.IntraLedgerPaymentSendMutation,
    GaloyGQL.IntraLedgerPaymentSendMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.IntraLedgerPaymentSendMutation> & MutationHelpers>

const intraLedgerPaymentSendMutation = (
  config?: MutationHookOptions<
    GaloyGQL.IntraLedgerPaymentSendMutation,
    GaloyGQL.IntraLedgerPaymentSendMutationVariables
  >,
): [
  IntraLedgerPaymentSendFunction,
  MutationResult<GaloyGQL.IntraLedgerPaymentSendMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.IntraLedgerPaymentSendMutation,
    GaloyGQL.IntraLedgerPaymentSendMutationVariables,
    IntraLedgerPaymentSendFunction
  >("intraLedgerPaymentSend", config)
}

type LnInvoicePaymentSendFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnInvoicePaymentSendMutation,
    GaloyGQL.LnInvoicePaymentSendMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.LnInvoicePaymentSendMutation> & MutationHelpers>

const lnInvoicePaymentSendMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnInvoicePaymentSendMutation,
    GaloyGQL.LnInvoicePaymentSendMutationVariables
  >,
): [
  LnInvoicePaymentSendFunction,
  MutationResult<GaloyGQL.LnInvoicePaymentSendMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnInvoicePaymentSendMutation,
    GaloyGQL.LnInvoicePaymentSendMutationVariables,
    LnInvoicePaymentSendFunction
  >("lnInvoicePaymentSend", config)
}

type LnInvoiceFeeProbeFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnInvoiceFeeProbeMutation,
    GaloyGQL.LnInvoiceFeeProbeMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.LnInvoiceFeeProbeMutation> & MutationHelpers>

const lnInvoiceFeeProbeMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnInvoiceFeeProbeMutation,
    GaloyGQL.LnInvoiceFeeProbeMutationVariables
  >,
): [
  LnInvoiceFeeProbeFunction,
  MutationResult<GaloyGQL.LnInvoiceFeeProbeMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnInvoiceFeeProbeMutation,
    GaloyGQL.LnInvoiceFeeProbeMutationVariables,
    LnInvoiceFeeProbeFunction
  >("lnInvoiceFeeProbe", config)
}

type OnChainPaymentSendFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.OnChainPaymentSendMutation,
    GaloyGQL.OnChainPaymentSendMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.OnChainPaymentSendMutation> & MutationHelpers>

const onChainPaymentSendMutation = (
  config?: MutationHookOptions<
    GaloyGQL.OnChainPaymentSendMutation,
    GaloyGQL.OnChainPaymentSendMutationVariables
  >,
): [
  OnChainPaymentSendFunction,
  MutationResult<GaloyGQL.OnChainPaymentSendMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.OnChainPaymentSendMutation,
    GaloyGQL.OnChainPaymentSendMutationVariables,
    OnChainPaymentSendFunction
  >("onChainPaymentSend", config)
}

type LnNoAmountInvoicePaymentSendFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnNoAmountInvoicePaymentSendMutation,
    GaloyGQL.LnNoAmountInvoicePaymentSendMutationVariables
  >,
) => Promise<
  MutationResult<GaloyGQL.LnNoAmountInvoicePaymentSendMutation> & MutationHelpers
>

const lnNoAmountInvoicePaymentSendMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnNoAmountInvoicePaymentSendMutation,
    GaloyGQL.LnNoAmountInvoicePaymentSendMutationVariables
  >,
): [
  LnNoAmountInvoicePaymentSendFunction,
  MutationResult<GaloyGQL.LnNoAmountInvoicePaymentSendMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnNoAmountInvoicePaymentSendMutation,
    GaloyGQL.LnNoAmountInvoicePaymentSendMutationVariables,
    LnNoAmountInvoicePaymentSendFunction
  >("lnNoAmountInvoicePaymentSend", config)
}

type LnNoAmountInvoiceFeeProbeFunction = (
  options?: MutationFunctionOptions<
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutation,
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutationVariables
  >,
) => Promise<MutationResult<GaloyGQL.LnNoAmountInvoiceFeeProbeMutation> & MutationHelpers>

const lnNoAmountInvoiceFeeProbeMutation = (
  config?: MutationHookOptions<
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutation,
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutationVariables
  >,
): [
  LnNoAmountInvoiceFeeProbeFunction,
  MutationResult<GaloyGQL.LnNoAmountInvoiceFeeProbeMutation> & MutationHelpers,
] => {
  return useMutationWrapper<
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutation,
    GaloyGQL.LnNoAmountInvoiceFeeProbeMutationVariables,
    LnNoAmountInvoiceFeeProbeFunction
  >("lnNoAmountInvoiceFeeProbe", config)
}

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
  onChainAddressCurrent: onChainAddressCurrentMutation,
  onChainPaymentSend: onChainPaymentSendMutation,
}
