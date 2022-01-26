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
import ADD_DEVICE_TOKEN from "./mutations/device-notification-token-create"
import UPDATE_LANGUAGE from "./mutations/update-language"
import UPDATE_NAME from "./mutations/update-name"
import USER_QUIZ_QUESTION_UPDATE_COMPLETED from "./mutations/user-quiz-question-completed"
import BTC_PRICE_LIST from "./queries/btc-price-list"
import QUERY_BUSINESSES from "./queries/business-map-markers"
import COMPLETED_QUIZ_QUESTIONS from "./queries/completed-quiz-questions"
import CONTACTS from "./queries/contacts"
import GET_WALLET_CSV_TRANSACTIONS from "./queries/get-wallet-csv-transactions"
import QUIZ_QUESTIONS from "./queries/quiz-questions"
import TRANSACTIONS_LIST_FOR_CONTACT from "./queries/transaction-list-for-contact"
import TRANSACTIONS_LIST from "./queries/transaction-list"
import USERNAME_AVAILABLE from "./queries/username-available"

export { GaloyGQL } from "./types"

export const queries = {
  main: MAIN,
  onChainTxFee: ON_CHAIN_TX_FEE,
  userDefaultWalletId: USER_DEFAULT_WALLET_ID,
  btcPriceList: BTC_PRICE_LIST,
  businessMapMarkers: QUERY_BUSINESSES,
  completedQuizQuestions: COMPLETED_QUIZ_QUESTIONS,
  contacts: CONTACTS,
  getWalletCsvTransactions: GET_WALLET_CSV_TRANSACTIONS,
  quizQuestions: QUIZ_QUESTIONS,
  transactionListForContact: TRANSACTIONS_LIST_FOR_CONTACT,
  transactionList: TRANSACTIONS_LIST,
  usernameAvailable: USERNAME_AVAILABLE,
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
  deviceNotificationTokenCreate: ADD_DEVICE_TOKEN,
  updateLanugage: UPDATE_LANGUAGE,
  updateName: UPDATE_NAME,
  userQuizQuestionCompleted: USER_QUIZ_QUESTION_UPDATE_COMPLETED,
}

export const subscriptions = {
  myUpdates: MY_UPDATES,
}
