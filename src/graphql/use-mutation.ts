import {
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation as useApolloMutation,
} from "@apollo/client"
import { useCallback } from "react"

import { GaloyGQL, joinErrorsMessages } from "../index"

import { loadFilesSync } from "@graphql-tools/load-files"

const accountUpdateDefaultWalletId = loadFilesSync(
  "./mutations/account-update-default-wallet-id.gql",
)[0]
const userLoginUpgrade = loadFilesSync("./mutations/user-login-upgrade.gql")[0]
const userDeviceAccountCreate = loadFilesSync(
  "./mutations/user-device-account-create.gql",
)[0]
const captchaCreateChallenge = loadFilesSync(
  "./mutations/captcha-create-challenge.gql",
)[0]
const captchaRequestAuthCode = loadFilesSync(
  "./mutations/captcha-request-auth-code.gql",
)[0]
const deviceNotificationTokenCreate = loadFilesSync(
  "./mutations/device-notification-token-create.gql",
)[0]
const intraLedgerPaymentSend = loadFilesSync(
  "./mutations/intra-ledger-paymest-send.gql",
)[0]
const intraLedgerUsdPaymentSend = loadFilesSync(
  "./mutations/intra-ledger-usd-payment-send.gql",
)[0]
const lnInvoiceCreate = loadFilesSync("./mutations/ln-invoice-create.gql")[0]
const lnInvoiceCreateOnBehalfOfRecipient = loadFilesSync(
  "./mutations/ln-invoice-create-on-behalf-of-recipient.gql",
)[0]
const lnInvoiceFeeProbe = loadFilesSync("./mutations/ln-invoice-fee-probe.gql")[0]
const lnInvoicePaymentSend = loadFilesSync("./mutations/ln-invoice-payment-send.gql")[0]
const lnNoAmountInvoiceCreate = loadFilesSync(
  "./mutations/ln-no-amount-invoice-create.gql",
)[0]
const lnNoAmountInvoiceFeeProbe = loadFilesSync(
  "./mutations/ln-no-amount-invoice-fee-probe.gql",
)[0]
const lnNoAmountInvoicePaymentSend = loadFilesSync(
  "./mutations/ln-no-amount-invoice-payment-send.gql",
)[0]
const lnNoAmountUsdInvoiceFeeProbe = loadFilesSync(
  "./mutations/ln-no-amount-usd-invoice-fee-probe.gql",
)[0]
const lnNoAmountUsdInvoicePaymentSend = loadFilesSync(
  "./mutations/ln-no-amount-usd-invoice-payment-send.gql",
)[0]
const lnUsdInvoiceCreate = loadFilesSync("./mutations/ln-usd-invoice-create.gql")[0]
const lnUsdInvoiceCreateOnBehalfOfRecipient = loadFilesSync(
  "./mutations/ln-usd-invoice-create-on-behalf-of-recipient.gql",
)[0]
const lnUsdInvoiceFeeProbe = loadFilesSync("./mutations/ln-usd-invoice-fee-probe.gql")[0]
const onChainAddressCurrent = loadFilesSync("./mutations/on-chain-address-current.gql")[0]
const onChainPaymentSend = loadFilesSync("./mutations/on-chain-payment-send.gql")[0]
const userContactUpdateAlias = loadFilesSync(
  "./mutations/user-contact-update-alias.gql",
)[0]
const userLogin = loadFilesSync("./mutations/user-login.gql")[0]
const userQuizQuestionUpdateCompleted = loadFilesSync(
  "./mutations/user-quiz-question-update-completed.gql",
)[0]
const userUpdateLanguage = loadFilesSync("./mutations/user-update-language.gql")[0]
const userUpdateUsername = loadFilesSync("./mutations/user-update-username.gql")[0]

export const MUTATIONS = {
  accountUpdateDefaultWalletId,
  userLoginUpgrade,
  userDeviceAccountCreate,
  captchaCreateChallenge,
  captchaRequestAuthCode,
  deviceNotificationTokenCreate,
  intraLedgerPaymentSend,
  intraLedgerUsdPaymentSend,
  lnInvoiceCreate,
  lnInvoiceCreateOnBehalfOfRecipient,
  lnInvoiceFeeProbe,
  lnInvoicePaymentSend,
  lnNoAmountInvoiceCreate,
  lnNoAmountInvoiceFeeProbe,
  lnNoAmountInvoicePaymentSend,
  lnNoAmountUsdInvoiceFeeProbe,
  lnNoAmountUsdInvoicePaymentSend,
  lnUsdInvoiceCreate,
  lnUsdInvoiceCreateOnBehalfOfRecipient,
  lnUsdInvoiceFeeProbe,
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
