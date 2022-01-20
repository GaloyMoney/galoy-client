import CAPTCHA_CREATE_CHALLENGE from "./mutations/captcha-create-challenge"
import CAPTCHA_REQUEST_AUTH_CODE from "./mutations/captcha-request-auth-code"
import INTRA_LEDGER_PAYMENT_SEND from "./mutations/intra-ledger-paymest-send"
import LN_INVOICE_CREATE from "./mutations/ln-invoice-create"
import LN_INVOICE_FEE_PROPE from "./mutations/ln-invoice-fee-prope"
import LN_INVOICE_PAYMENT_SEND from "./mutations/ln-invoice-payment-send"
import LN_NO_AMOUNT_INVOICE_CREATE from "./mutations/ln-no-amount-invoice-create"
import LN_NO_AMOUNT_INVOICE_FEE_PROPE from "./mutations/ln-no-amount-invoice-fee-probe"
import LN_NO_AMOUNT_INVOICE_PAYMENT_SEND from "./mutations/ln-no-amount-invoice-payment-send"
import USER_LOGIN from "./mutations/mutation.user-login"
import ON_CHAIN_PAYMENT_SEND from "./mutations/on-chain-payment-send"
import ON_CHAIN_ADDRESS_CURRENT from "./mutations/on-chain-address-current"

import MAIN from "./queries/main"
import ON_CHAIN_TX_FEE from "./queries/on-chain-tx-fee"
import USER_DEFAULT_WALLET_ID from "./queries/user-default-wallet-id"

import MY_UPDATES from "./supscriptions/my-updates"

export { GaloyGQL } from "./types"

export const queries = {
  main: MAIN,
  onChainTxFee: ON_CHAIN_TX_FEE,
  userDefaultWalletId: USER_DEFAULT_WALLET_ID,
}

export const mutations = {
  captchaCreateChallenge: CAPTCHA_CREATE_CHALLENGE,
  captchaRequestAuthCode: CAPTCHA_REQUEST_AUTH_CODE,
  intraLedgerPaymentSend: INTRA_LEDGER_PAYMENT_SEND,
  lnInvoiceCreate: LN_INVOICE_CREATE,
  lnInvoiceFeePrope: LN_INVOICE_FEE_PROPE,
  lnInvoicePaymentSend: LN_INVOICE_PAYMENT_SEND,
  lnNoAmountInvoiceCreate: LN_NO_AMOUNT_INVOICE_CREATE,
  lnNoAmountInvoiceFeePrope: LN_NO_AMOUNT_INVOICE_FEE_PROPE,
  lnNoAmountInvoicePaymentSend: LN_NO_AMOUNT_INVOICE_PAYMENT_SEND,
  onChainAddressCurrent: ON_CHAIN_ADDRESS_CURRENT,
  onChainPaymentSend: ON_CHAIN_PAYMENT_SEND,
  userLogin: USER_LOGIN,
}

export const subscriptions = {
  myUpdates: MY_UPDATES,
}
