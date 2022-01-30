export namespace GaloyGQL {
  export type Maybe<T> = T | null
  export type InputMaybe<T> = Maybe<T>
  export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
  }
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
  }
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** Identifier of an account api key */
    AccountApiKeyLabel: string
    /** An authentication code valid for a single use */
    AuthToken: string
    /** An alias name that a user can set for a wallet (with which they have transactions) */
    ContactAlias: string
    /** Hex-encoded string of 32 bytes */
    Hex32Bytes: string
    Language: string
    LnPaymentPreImage: string
    /** BOLT11 lightning invoice payment request with the amount included */
    LnPaymentRequest: string
    LnPaymentSecret: string
    /** Text field in a lightning payment transaction */
    Memo: string
    /** An address for an on-chain bitcoin destination */
    OnChainAddress: string
    OnChainTxHash: string
    /** An authentication code valid for a single use */
    OneTimeAuthCode: string
    PaymentHash: string
    /** Phone number which includes country code */
    Phone: string
    /** Non-fractional signed whole numeric value between -(2^53) + 1 and 2^53 - 1 */
    SafeInt: number
    /** (Positive) Satoshi amount (i.g. quiz earning) */
    SatAmount: number
    /** An amount (of a currency) that can be negative (i.g. in a transaction) */
    SignedAmount: number
    /** (Positive) Number of blocks in which the transaction is expected to be confirmed */
    TargetConfirmations: number
    /** Timestamp field, serialized as Unix time (the number of seconds since the Unix epoch) */
    Timestamp: number
    /** Unique identifier of a user */
    Username: string
    /** Unique identifier of a wallet */
    WalletId: string
  }

  export type Account = {
    csvTransactions: Scalars["String"]
    defaultWalletId: Scalars["WalletId"]
    id: Scalars["ID"]
    wallets: Array<Wallet>
  }

  export type AccountCsvTransactionsArgs = {
    walletIds: Array<Scalars["WalletId"]>
  }

  export type AccountApiKey = {
    __typename?: "AccountApiKey"
    expireAt: Scalars["Timestamp"]
    key: Scalars["String"]
    label: Scalars["AccountApiKeyLabel"]
    secret: Scalars["String"]
  }

  export type AccountApiKeyCreateInput = {
    expireAt: Scalars["Timestamp"]
    label?: InputMaybe<Scalars["AccountApiKeyLabel"]>
  }

  export type AccountApiKeyDisableInput = {
    label: Scalars["AccountApiKeyLabel"]
  }

  export type AccountApiKeyHashed = {
    __typename?: "AccountApiKeyHashed"
    expireAt: Scalars["Timestamp"]
    label: Scalars["AccountApiKeyLabel"]
  }

  export type AccountApiKeyPayload = {
    __typename?: "AccountApiKeyPayload"
    accountApiKey?: Maybe<AccountApiKey>
    errors: Array<Error>
  }

  export type AuthTokenPayload = {
    __typename?: "AuthTokenPayload"
    authToken?: Maybe<Scalars["AuthToken"]>
    errors: Array<Error>
  }

  export type BtcWallet = Wallet & {
    __typename?: "BTCWallet"
    balance: Scalars["SignedAmount"]
    id: Scalars["ID"]
    transactions?: Maybe<TransactionConnection>
    walletCurrency: WalletCurrency
  }

  export type BtcWalletTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type BuildInformation = {
    __typename?: "BuildInformation"
    buildTime?: Maybe<Scalars["Timestamp"]>
    commitHash?: Maybe<Scalars["String"]>
    helmRevision?: Maybe<Scalars["Int"]>
  }

  export type CaptchaCreateChallengePayload = {
    __typename?: "CaptchaCreateChallengePayload"
    errors: Array<Error>
    result?: Maybe<CaptchaCreateChallengeResult>
  }

  export type CaptchaCreateChallengeResult = {
    __typename?: "CaptchaCreateChallengeResult"
    challengeCode: Scalars["String"]
    failbackMode: Scalars["Boolean"]
    id: Scalars["String"]
    newCaptcha: Scalars["Boolean"]
  }

  export type CaptchaRequestAuthCodeInput = {
    challengeCode: Scalars["String"]
    phone: Scalars["Phone"]
    secCode: Scalars["String"]
    validationCode: Scalars["String"]
  }

  export type ConsumerAccount = Account & {
    __typename?: "ConsumerAccount"
    /** return CSV stream, base64 encoded, of the list of transactions in the wallet */
    csvTransactions: Scalars["String"]
    defaultWalletId: Scalars["WalletId"]
    id: Scalars["ID"]
    wallets: Array<Wallet>
  }

  export type ConsumerAccountCsvTransactionsArgs = {
    walletIds: Array<Scalars["WalletId"]>
  }

  export type Coordinates = {
    __typename?: "Coordinates"
    latitude: Scalars["Float"]
    longitude: Scalars["Float"]
  }

  export type DeviceNotificationTokenCreateInput = {
    deviceToken: Scalars["String"]
  }

  export type Error = {
    message: Scalars["String"]
    path?: Maybe<Array<Maybe<Scalars["String"]>>>
  }

  export type ExchangeCurrencyUnit = "BTCSAT" | "USDCENT"

  /** Provides global settings for the application which might have an impact for the user. */
  export type Globals = {
    __typename?: "Globals"
    buildInformation: BuildInformation
    /**
     * A list of public keys for the running lightning nodes.
     * This can be used to know if an invoice belongs to one of our nodes.
     */
    nodesIds: Array<Scalars["String"]>
  }

  export type InitiationVia =
    | InitiationViaIntraLedger
    | InitiationViaLn
    | InitiationViaOnChain

  export type InitiationViaIntraLedger = {
    __typename?: "InitiationViaIntraLedger"
    counterPartyUsername?: Maybe<Scalars["Username"]>
    counterPartyWalletId?: Maybe<Scalars["WalletId"]>
  }

  export type InitiationViaLn = {
    __typename?: "InitiationViaLn"
    paymentHash: Scalars["PaymentHash"]
  }

  export type InitiationViaOnChain = {
    __typename?: "InitiationViaOnChain"
    address: Scalars["OnChainAddress"]
  }

  export type InputError = Error & {
    __typename?: "InputError"
    code: InputErrorCode
    message: Scalars["String"]
    path?: Maybe<Array<Maybe<Scalars["String"]>>>
  }

  export type InputErrorCode =
    | "INVALID_INPUT"
    | "VALUE_NOT_ALLOWED"
    | "VALUE_TOO_LONG"
    | "VALUE_TOO_SHORT"

  export type IntraLedgerPaymentSendInput = {
    amount: Scalars["SatAmount"]
    memo?: InputMaybe<Scalars["Memo"]>
    recipientWalletId: Scalars["WalletId"]
    walletId: Scalars["WalletId"]
  }

  export type IntraLedgerUpdate = {
    __typename?: "IntraLedgerUpdate"
    amount: Scalars["SatAmount"]
    txNotificationType: TxNotificationType
    usdPerSat: Scalars["Float"]
    walletId: Scalars["WalletId"]
  }

  export type InvoicePaymentStatus = "PAID" | "PENDING"

  export type LnInvoice = {
    __typename?: "LnInvoice"
    paymentHash: Scalars["PaymentHash"]
    paymentRequest: Scalars["LnPaymentRequest"]
    paymentSecret: Scalars["LnPaymentSecret"]
    satoshis?: Maybe<Scalars["SatAmount"]>
  }

  export type LnInvoiceCreateInput = {
    amount: Scalars["SatAmount"]
    memo?: InputMaybe<Scalars["Memo"]>
    walletId: Scalars["WalletId"]
  }

  export type LnInvoiceCreateOnBehalfOfRecipientInput = {
    amount: Scalars["SatAmount"]
    descriptionHash?: InputMaybe<Scalars["Hex32Bytes"]>
    memo?: InputMaybe<Scalars["Memo"]>
    recipientWalletId: Scalars["WalletId"]
  }

  export type LnInvoiceFeeProbeInput = {
    paymentRequest: Scalars["LnPaymentRequest"]
    walletId: Scalars["WalletId"]
  }

  export type LnInvoicePayload = {
    __typename?: "LnInvoicePayload"
    errors: Array<Error>
    invoice?: Maybe<LnInvoice>
  }

  export type LnInvoicePaymentInput = {
    memo?: InputMaybe<Scalars["Memo"]>
    paymentRequest: Scalars["LnPaymentRequest"]
    walletId: Scalars["WalletId"]
  }

  export type LnInvoicePaymentStatusInput = {
    paymentRequest: Scalars["LnPaymentRequest"]
  }

  export type LnInvoicePaymentStatusPayload = {
    __typename?: "LnInvoicePaymentStatusPayload"
    errors: Array<Error>
    status?: Maybe<InvoicePaymentStatus>
  }

  export type LnNoAmountInvoice = {
    __typename?: "LnNoAmountInvoice"
    paymentHash: Scalars["PaymentHash"]
    paymentRequest: Scalars["LnPaymentRequest"]
    paymentSecret: Scalars["LnPaymentSecret"]
  }

  export type LnNoAmountInvoiceCreateInput = {
    memo?: InputMaybe<Scalars["Memo"]>
    walletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoiceCreateOnBehalfOfRecipientInput = {
    memo?: InputMaybe<Scalars["Memo"]>
    recipientWalletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoiceFeeProbeInput = {
    amount: Scalars["SatAmount"]
    paymentRequest: Scalars["LnPaymentRequest"]
    walletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoicePayload = {
    __typename?: "LnNoAmountInvoicePayload"
    errors: Array<Error>
    invoice?: Maybe<LnNoAmountInvoice>
  }

  export type LnNoAmountInvoicePaymentInput = {
    amount: Scalars["SatAmount"]
    memo?: InputMaybe<Scalars["Memo"]>
    paymentRequest: Scalars["LnPaymentRequest"]
    walletId: Scalars["WalletId"]
  }

  export type LnUpdate = {
    __typename?: "LnUpdate"
    paymentHash: Scalars["PaymentHash"]
    status: InvoicePaymentStatus
    walletId: Scalars["WalletId"]
  }

  export type MapInfo = {
    __typename?: "MapInfo"
    coordinates: Coordinates
    title: Scalars["String"]
  }

  export type MapMarker = {
    __typename?: "MapMarker"
    mapInfo: MapInfo
    username?: Maybe<Scalars["Username"]>
  }

  export type MobileVersions = {
    __typename?: "MobileVersions"
    currentSupported: Scalars["Int"]
    minSupported: Scalars["Int"]
    platform: Scalars["String"]
  }

  export type Mutation = {
    __typename?: "Mutation"
    accountApiKeyCreate: AccountApiKeyPayload
    accountApiKeyDisable: SuccessPayload
    captchaCreateChallenge: CaptchaCreateChallengePayload
    captchaRequestAuthCode: SuccessPayload
    deviceNotificationTokenCreate: SuccessPayload
    intraLedgerPaymentSend: PaymentSendPayload
    lnInvoiceCreate: LnInvoicePayload
    lnInvoiceCreateOnBehalfOfRecipient: LnInvoicePayload
    lnInvoiceFeeProbe: SatAmountPayload
    lnInvoicePaymentSend: PaymentSendPayload
    lnNoAmountInvoiceCreate: LnNoAmountInvoicePayload
    lnNoAmountInvoiceCreateOnBehalfOfRecipient: LnNoAmountInvoicePayload
    lnNoAmountInvoiceFeeProbe: SatAmountPayload
    lnNoAmountInvoicePaymentSend: PaymentSendPayload
    onChainAddressCreate: OnChainAddressPayload
    onChainAddressCurrent: OnChainAddressPayload
    onChainPaymentSend: PaymentSendPayload
    onChainPaymentSendAll: PaymentSendPayload
    twoFADelete: SuccessPayload
    twoFAGenerate: TwoFaGeneratePayload
    twoFASave: SuccessPayload
    /** @deprecated will be moved to AccountContact */
    userContactUpdateAlias: UserContactUpdateAliasPayload
    userLogin: AuthTokenPayload
    userQuizQuestionUpdateCompleted: UserQuizQuestionUpdateCompletedPayload
    userRequestAuthCode: SuccessPayload
    userUpdateLanguage: UserUpdateLanguagePayload
    /** @deprecated Username will be moved to @Handle in Accounts. Also SetUsername should be used instead of UpdateUsername to reflect the idempotency of Handles */
    userUpdateUsername: UserUpdateUsernamePayload
  }

  export type MutationAccountApiKeyCreateArgs = {
    input: AccountApiKeyCreateInput
  }

  export type MutationAccountApiKeyDisableArgs = {
    input: AccountApiKeyDisableInput
  }

  export type MutationCaptchaRequestAuthCodeArgs = {
    input: CaptchaRequestAuthCodeInput
  }

  export type MutationDeviceNotificationTokenCreateArgs = {
    input: DeviceNotificationTokenCreateInput
  }

  export type MutationIntraLedgerPaymentSendArgs = {
    input: IntraLedgerPaymentSendInput
  }

  export type MutationLnInvoiceCreateArgs = {
    input: LnInvoiceCreateInput
  }

  export type MutationLnInvoiceCreateOnBehalfOfRecipientArgs = {
    input: LnInvoiceCreateOnBehalfOfRecipientInput
  }

  export type MutationLnInvoiceFeeProbeArgs = {
    input: LnInvoiceFeeProbeInput
  }

  export type MutationLnInvoicePaymentSendArgs = {
    input: LnInvoicePaymentInput
  }

  export type MutationLnNoAmountInvoiceCreateArgs = {
    input: LnNoAmountInvoiceCreateInput
  }

  export type MutationLnNoAmountInvoiceCreateOnBehalfOfRecipientArgs = {
    input: LnNoAmountInvoiceCreateOnBehalfOfRecipientInput
  }

  export type MutationLnNoAmountInvoiceFeeProbeArgs = {
    input: LnNoAmountInvoiceFeeProbeInput
  }

  export type MutationLnNoAmountInvoicePaymentSendArgs = {
    input: LnNoAmountInvoicePaymentInput
  }

  export type MutationOnChainAddressCreateArgs = {
    input: OnChainAddressCreateInput
  }

  export type MutationOnChainAddressCurrentArgs = {
    input: OnChainAddressCurrentInput
  }

  export type MutationOnChainPaymentSendArgs = {
    input: OnChainPaymentSendInput
  }

  export type MutationOnChainPaymentSendAllArgs = {
    input: OnChainPaymentSendAllInput
  }

  export type MutationTwoFaDeleteArgs = {
    input: TwoFaDeleteInput
  }

  export type MutationTwoFaSaveArgs = {
    input: TwoFaSaveInput
  }

  export type MutationUserContactUpdateAliasArgs = {
    input: UserContactUpdateAliasInput
  }

  export type MutationUserLoginArgs = {
    input: UserLoginInput
  }

  export type MutationUserQuizQuestionUpdateCompletedArgs = {
    input: UserQuizQuestionUpdateCompletedInput
  }

  export type MutationUserRequestAuthCodeArgs = {
    input: UserRequestAuthCodeInput
  }

  export type MutationUserUpdateLanguageArgs = {
    input: UserUpdateLanguageInput
  }

  export type MutationUserUpdateUsernameArgs = {
    input: UserUpdateUsernameInput
  }

  export type MyUpdatesPayload = {
    __typename?: "MyUpdatesPayload"
    errors: Array<Error>
    me?: Maybe<User>
    update?: Maybe<UserUpdate>
  }

  export type OnChainAddressCreateInput = {
    walletId: Scalars["WalletId"]
  }

  export type OnChainAddressCurrentInput = {
    walletId: Scalars["WalletId"]
  }

  export type OnChainAddressPayload = {
    __typename?: "OnChainAddressPayload"
    address?: Maybe<Scalars["OnChainAddress"]>
    errors: Array<Error>
  }

  export type OnChainPaymentSendAllInput = {
    address: Scalars["OnChainAddress"]
    memo?: InputMaybe<Scalars["Memo"]>
    targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
    walletId: Scalars["WalletId"]
  }

  export type OnChainPaymentSendInput = {
    address: Scalars["OnChainAddress"]
    amount: Scalars["SatAmount"]
    memo?: InputMaybe<Scalars["Memo"]>
    targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
    walletId: Scalars["WalletId"]
  }

  export type OnChainTxFee = {
    __typename?: "OnChainTxFee"
    amount: Scalars["SatAmount"]
    targetConfirmations: Scalars["TargetConfirmations"]
  }

  export type OnChainUpdate = {
    __typename?: "OnChainUpdate"
    amount: Scalars["SatAmount"]
    txHash: Scalars["OnChainTxHash"]
    txNotificationType: TxNotificationType
    usdPerSat: Scalars["Float"]
    walletId: Scalars["WalletId"]
  }

  /** Information about pagination in a connection. */
  export type PageInfo = {
    __typename?: "PageInfo"
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"]
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"]
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>
  }

  export type PaymentError = Error & {
    __typename?: "PaymentError"
    code: PaymentErrorCode
    message: Scalars["String"]
    path?: Maybe<Array<Maybe<Scalars["String"]>>>
  }

  export type PaymentErrorCode =
    | "ACCOUNT_LOCKED"
    | "INSUFFICIENT_BALANCE"
    | "INVOICE_PAID"
    | "LIMIT_EXCEEDED"
    | "NO_LIQUIDITY"
    | "NO_ROUTE"

  export type PaymentSendPayload = {
    __typename?: "PaymentSendPayload"
    errors: Array<Error>
    status?: Maybe<PaymentSendResult>
  }

  export type PaymentSendResult = "ALREADY_PAID" | "FAILURE" | "PENDING" | "SUCCESS"

  /** Price amount expressed in base/offset. To calculate, use: `base / 10^offset` */
  export type Price = {
    __typename?: "Price"
    base: Scalars["SafeInt"]
    currencyUnit: ExchangeCurrencyUnit
    formattedAmount: Scalars["String"]
    offset: Scalars["Int"]
  }

  /** The range for the X axis in the BTC price graph */
  export type PriceGraphRange =
    | "FIVE_YEARS"
    | "ONE_DAY"
    | "ONE_MONTH"
    | "ONE_WEEK"
    | "ONE_YEAR"

  export type PriceInput = {
    amount: Scalars["SatAmount"]
    amountCurrencyUnit: ExchangeCurrencyUnit
    priceCurrencyUnit: ExchangeCurrencyUnit
  }

  export type PricePayload = {
    __typename?: "PricePayload"
    errors: Array<Error>
    price?: Maybe<Price>
  }

  export type PricePoint = {
    __typename?: "PricePoint"
    price: Price
    /** Unix timesamp (number of seconds elapsed since January 1, 1970 00:00:00 UTC) */
    timestamp: Scalars["Timestamp"]
  }

  export type Query = {
    __typename?: "Query"
    accountApiKeys?: Maybe<Array<Maybe<AccountApiKeyHashed>>>
    btcPrice?: Maybe<Price>
    btcPriceList?: Maybe<Array<Maybe<PricePoint>>>
    businessMapMarkers?: Maybe<Array<Maybe<MapMarker>>>
    globals?: Maybe<Globals>
    me?: Maybe<User>
    mobileVersions?: Maybe<Array<Maybe<MobileVersions>>>
    onChainTxFee: OnChainTxFee
    quizQuestions?: Maybe<Array<Maybe<QuizQuestion>>>
    /** @deprecated will be migrated to AccountDefaultWalletId */
    userDefaultWalletId: Scalars["WalletId"]
    usernameAvailable?: Maybe<Scalars["Boolean"]>
  }

  export type QueryBtcPriceListArgs = {
    range: PriceGraphRange
  }

  export type QueryOnChainTxFeeArgs = {
    address: Scalars["OnChainAddress"]
    amount: Scalars["SatAmount"]
    targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
    walletId: Scalars["WalletId"]
  }

  export type QueryUserDefaultWalletIdArgs = {
    username: Scalars["Username"]
  }

  export type QueryUsernameAvailableArgs = {
    username: Scalars["Username"]
  }

  export type QuizQuestion = {
    __typename?: "QuizQuestion"
    /** The earn reward in Satoshis for the quiz question */
    earnAmount: Scalars["SatAmount"]
    id: Scalars["ID"]
  }

  export type SatAmountPayload = {
    __typename?: "SatAmountPayload"
    amount?: Maybe<Scalars["SatAmount"]>
    errors: Array<Error>
  }

  export type SettlementVia =
    | SettlementViaIntraLedger
    | SettlementViaLn
    | SettlementViaOnChain

  export type SettlementViaIntraLedger = {
    __typename?: "SettlementViaIntraLedger"
    /** Settlement destination: Could be null if the payee does not have a username */
    counterPartyUsername?: Maybe<Scalars["Username"]>
    counterPartyWalletId?: Maybe<Scalars["WalletId"]>
  }

  export type SettlementViaLn = {
    __typename?: "SettlementViaLn"
    /** @deprecated Shifting property to 'preImage' to improve granularity of the LnPaymentSecret type */
    paymentSecret?: Maybe<Scalars["LnPaymentSecret"]>
    preImage?: Maybe<Scalars["LnPaymentPreImage"]>
  }

  export type SettlementViaOnChain = {
    __typename?: "SettlementViaOnChain"
    transactionHash: Scalars["OnChainTxHash"]
  }

  export type Subscription = {
    __typename?: "Subscription"
    lnInvoicePaymentStatus: LnInvoicePaymentStatusPayload
    myUpdates: MyUpdatesPayload
    price: PricePayload
  }

  export type SubscriptionLnInvoicePaymentStatusArgs = {
    input: LnInvoicePaymentStatusInput
  }

  export type SubscriptionPriceArgs = {
    input: PriceInput
  }

  export type SuccessPayload = {
    __typename?: "SuccessPayload"
    errors: Array<Error>
    success?: Maybe<Scalars["Boolean"]>
  }

  /**
   * Give details about an individual transaction.
   * Galoy have a smart routing system which is automatically
   * settling intraledger when both the payer and payee use the same wallet
   * therefore it's possible the transactions is being initiated onchain
   * or with lightning but settled intraledger.
   */
  export type Transaction = {
    __typename?: "Transaction"
    createdAt: Scalars["Timestamp"]
    direction: TxDirection
    id: Scalars["ID"]
    /** From which protocol the payment has been initiated. */
    initiationVia: InitiationVia
    memo?: Maybe<Scalars["Memo"]>
    /** Amount of sats sent or received. */
    settlementAmount: Scalars["SatAmount"]
    settlementFee: Scalars["SatAmount"]
    /** Price in USDCENT/SATS at time of settlement. */
    settlementPrice: Price
    /** To which protocol the payment has settled on. */
    settlementVia: SettlementVia
    status: TxStatus
  }

  /** A connection to a list of items. */
  export type TransactionConnection = {
    __typename?: "TransactionConnection"
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<TransactionEdge>>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
  }

  /** An edge in a connection. */
  export type TransactionEdge = {
    __typename?: "TransactionEdge"
    /** A cursor for use in pagination */
    cursor: Scalars["String"]
    /** The item at the end of the edge */
    node?: Maybe<Transaction>
  }

  export type TwoFaDeleteInput = {
    token: Scalars["String"]
  }

  export type TwoFaGeneratePayload = {
    __typename?: "TwoFAGeneratePayload"
    errors: Array<Error>
    twoFASecret?: Maybe<TwoFaSecret>
  }

  export type TwoFaSaveInput = {
    secret: Scalars["String"]
    token: Scalars["String"]
  }

  export type TwoFaSecret = {
    __typename?: "TwoFASecret"
    secret: Scalars["String"]
    uri: Scalars["String"]
  }

  export type TxDirection = "RECEIVE" | "SEND"

  export type TxNotificationType =
    | "IntraLedgerPayment"
    | "IntraLedgerReceipt"
    | "LnInvoicePaid"
    | "OnchainPayment"
    | "OnchainReceipt"
    | "OnchainReceiptPending"

  export type TxStatus = "FAILURE" | "PENDING" | "SUCCESS"

  export type User = {
    __typename?: "User"
    /**
     * Get single contact details.
     * Can include the transactions associated with the contact.
     */
    contactByUsername: UserContact
    /**
     * Get full list of contacts.
     * Can include the transactions associated with each contact.
     * @deprecated will be moved to account
     */
    contacts: Array<UserContact>
    createdAt: Scalars["Timestamp"]
    defaultAccount: Account
    id: Scalars["ID"]
    /**
     * Preferred language for user.
     * When value is 'default' the intent is to use preferred language from OS settings.
     */
    language: Scalars["Language"]
    /** Phone number with international calling code. */
    phone: Scalars["Phone"]
    /** List the quiz questions the user may have completed. */
    quizQuestions: Array<UserQuizQuestion>
    twoFAEnabled?: Maybe<Scalars["Boolean"]>
    /**
     * Optional immutable user friendly identifier.
     * @deprecated will be moved to @Handle in Account and Wallet
     */
    username?: Maybe<Scalars["Username"]>
  }

  export type UserContactByUsernameArgs = {
    username: Scalars["Username"]
  }

  export type UserContact = {
    __typename?: "UserContact"
    /**
     * Alias the user can set for this contact.
     * Only the user can see the alias attached to their contact.
     */
    alias?: Maybe<Scalars["ContactAlias"]>
    id: Scalars["Username"]
    /** Paginated list of transactions sent to/from this contact. */
    transactions?: Maybe<TransactionConnection>
    transactionsCount: Scalars["Int"]
    /** Actual identifier of the contact. */
    username: Scalars["Username"]
  }

  export type UserContactTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type UserContactUpdateAliasInput = {
    alias: Scalars["ContactAlias"]
    username: Scalars["Username"]
  }

  export type UserContactUpdateAliasPayload = {
    __typename?: "UserContactUpdateAliasPayload"
    contact?: Maybe<UserContact>
    errors: Array<Error>
  }

  export type UserLoginInput = {
    code: Scalars["OneTimeAuthCode"]
    phone: Scalars["Phone"]
  }

  export type UserQuizQuestion = {
    __typename?: "UserQuizQuestion"
    completed: Scalars["Boolean"]
    question: QuizQuestion
  }

  export type UserQuizQuestionUpdateCompletedInput = {
    id: Scalars["ID"]
  }

  export type UserQuizQuestionUpdateCompletedPayload = {
    __typename?: "UserQuizQuestionUpdateCompletedPayload"
    errors: Array<Error>
    userQuizQuestion?: Maybe<UserQuizQuestion>
  }

  export type UserRequestAuthCodeInput = {
    phone: Scalars["Phone"]
  }

  export type UserUpdate = IntraLedgerUpdate | LnUpdate | OnChainUpdate | Price

  export type UserUpdateLanguageInput = {
    language: Scalars["Language"]
  }

  export type UserUpdateLanguagePayload = {
    __typename?: "UserUpdateLanguagePayload"
    errors: Array<Error>
    user?: Maybe<User>
  }

  export type UserUpdateUsernameInput = {
    username: Scalars["Username"]
  }

  export type UserUpdateUsernamePayload = {
    __typename?: "UserUpdateUsernamePayload"
    errors: Array<Error>
    user?: Maybe<User>
  }

  export type Wallet = {
    balance: Scalars["SignedAmount"]
    id: Scalars["ID"]
    /**
     * Transactions are ordered anti-chronogically,
     * ie: the newest transaction will be first
     */
    transactions?: Maybe<TransactionConnection>
    walletCurrency: WalletCurrency
  }

  export type WalletTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type WalletCurrency = "BTC"

  export type TransactionListFragment = {
    __typename?: "TransactionConnection"
    pageInfo: { __typename?: "PageInfo"; hasNextPage: boolean }
    edges?:
      | Array<
          | {
              __typename?: "TransactionEdge"
              cursor: string
              node?:
                | {
                    __typename: "Transaction"
                    id: string
                    status: TxStatus
                    direction: TxDirection
                    memo?: string | null | undefined
                    createdAt: number
                    settlementAmount: number
                    settlementFee: number
                    settlementPrice: {
                      __typename?: "Price"
                      base: number
                      offset: number
                    }
                    initiationVia:
                      | {
                          __typename: "InitiationViaIntraLedger"
                          counterPartyWalletId?: string | null | undefined
                          counterPartyUsername?: string | null | undefined
                        }
                      | { __typename: "InitiationViaLn"; paymentHash: string }
                      | { __typename: "InitiationViaOnChain"; address: string }
                    settlementVia:
                      | {
                          __typename: "SettlementViaIntraLedger"
                          counterPartyWalletId?: string | null | undefined
                          counterPartyUsername?: string | null | undefined
                        }
                      | {
                          __typename: "SettlementViaLn"
                          paymentSecret?: string | null | undefined
                        }
                      | { __typename: "SettlementViaOnChain"; transactionHash: string }
                  }
                | null
                | undefined
            }
          | null
          | undefined
        >
      | null
      | undefined
  }

  export type CaptchaCreateChallengeMutationVariables = Exact<{ [key: string]: never }>

  export type CaptchaCreateChallengeMutation = {
    __typename?: "Mutation"
    captchaCreateChallenge: {
      __typename?: "CaptchaCreateChallengePayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      result?:
        | {
            __typename?: "CaptchaCreateChallengeResult"
            id: string
            challengeCode: string
            newCaptcha: boolean
            failbackMode: boolean
          }
        | null
        | undefined
    }
  }

  export type CaptchaRequestAuthCodeMutationVariables = Exact<{
    input: CaptchaRequestAuthCodeInput
  }>

  export type CaptchaRequestAuthCodeMutation = {
    __typename?: "Mutation"
    captchaRequestAuthCode: {
      __typename?: "SuccessPayload"
      success?: boolean | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type DeviceNotificationTokenCreateMutationVariables = Exact<{
    deviceToken: Scalars["String"]
  }>

  export type DeviceNotificationTokenCreateMutation = {
    __typename?: "Mutation"
    deviceNotificationTokenCreate: {
      __typename?: "SuccessPayload"
      success?: boolean | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type IntraLedgerPaymentSendMutationVariables = Exact<{
    input: IntraLedgerPaymentSendInput
  }>

  export type IntraLedgerPaymentSendMutation = {
    __typename?: "Mutation"
    intraLedgerPaymentSend: {
      __typename?: "PaymentSendPayload"
      status?: PaymentSendResult | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type LnInvoiceCreateMutationVariables = Exact<{
    input: LnInvoiceCreateInput
  }>

  export type LnInvoiceCreateMutation = {
    __typename?: "Mutation"
    lnInvoiceCreate: {
      __typename?: "LnInvoicePayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      invoice?:
        | { __typename?: "LnInvoice"; paymentRequest: string; paymentHash: string }
        | null
        | undefined
    }
  }

  export type LnInvoiceFeeProbeMutationVariables = Exact<{
    input: LnInvoiceFeeProbeInput
  }>

  export type LnInvoiceFeeProbeMutation = {
    __typename?: "Mutation"
    lnInvoiceFeeProbe: {
      __typename?: "SatAmountPayload"
      amount?: number | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type LnInvoicePaymentSendMutationVariables = Exact<{
    input: LnInvoicePaymentInput
  }>

  export type LnInvoicePaymentSendMutation = {
    __typename?: "Mutation"
    lnInvoicePaymentSend: {
      __typename?: "PaymentSendPayload"
      status?: PaymentSendResult | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type LnNoAmountInvoiceCreateMutationVariables = Exact<{
    input: LnNoAmountInvoiceCreateInput
  }>

  export type LnNoAmountInvoiceCreateMutation = {
    __typename?: "Mutation"
    lnNoAmountInvoiceCreate: {
      __typename?: "LnNoAmountInvoicePayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      invoice?:
        | {
            __typename?: "LnNoAmountInvoice"
            paymentRequest: string
            paymentHash: string
          }
        | null
        | undefined
    }
  }

  export type LnNoAmountInvoiceFeeProbeMutationVariables = Exact<{
    input: LnNoAmountInvoiceFeeProbeInput
  }>

  export type LnNoAmountInvoiceFeeProbeMutation = {
    __typename?: "Mutation"
    lnNoAmountInvoiceFeeProbe: {
      __typename?: "SatAmountPayload"
      amount?: number | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type LnNoAmountInvoicePaymentSendMutationVariables = Exact<{
    input: LnNoAmountInvoicePaymentInput
  }>

  export type LnNoAmountInvoicePaymentSendMutation = {
    __typename?: "Mutation"
    lnNoAmountInvoicePaymentSend: {
      __typename?: "PaymentSendPayload"
      status?: PaymentSendResult | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type OnChainAddressCurrentMutationVariables = Exact<{
    input: OnChainAddressCurrentInput
  }>

  export type OnChainAddressCurrentMutation = {
    __typename?: "Mutation"
    onChainAddressCurrent: {
      __typename?: "OnChainAddressPayload"
      address?: string | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type OnChainPaymentSendMutationVariables = Exact<{
    input: OnChainPaymentSendInput
  }>

  export type OnChainPaymentSendMutation = {
    __typename?: "Mutation"
    onChainPaymentSend: {
      __typename?: "PaymentSendPayload"
      status?: PaymentSendResult | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type UserContactUpdateAliasMutationVariables = Exact<{
    input: UserContactUpdateAliasInput
  }>

  export type UserContactUpdateAliasMutation = {
    __typename?: "Mutation"
    userContactUpdateAlias: {
      __typename?: "UserContactUpdateAliasPayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type UserLoginMutationVariables = Exact<{
    input: UserLoginInput
  }>

  export type UserLoginMutation = {
    __typename?: "Mutation"
    userLogin: {
      __typename?: "AuthTokenPayload"
      authToken?: string | null | undefined
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
    }
  }

  export type UserQuizQuestionUpdateCompletedMutationVariables = Exact<{
    input: UserQuizQuestionUpdateCompletedInput
  }>

  export type UserQuizQuestionUpdateCompletedMutation = {
    __typename?: "Mutation"
    userQuizQuestionUpdateCompleted: {
      __typename?: "UserQuizQuestionUpdateCompletedPayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      userQuizQuestion?:
        | {
            __typename?: "UserQuizQuestion"
            completed: boolean
            question: { __typename?: "QuizQuestion"; id: string; earnAmount: number }
          }
        | null
        | undefined
    }
  }

  export type UpdateLanguageMutationVariables = Exact<{
    language: Scalars["Language"]
  }>

  export type UpdateLanguageMutation = {
    __typename?: "Mutation"
    userUpdateLanguage: {
      __typename?: "UserUpdateLanguagePayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      user?: { __typename?: "User"; id: string; language: string } | null | undefined
    }
  }

  export type UpdateUsernameMutationVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UpdateUsernameMutation = {
    __typename?: "Mutation"
    userUpdateUsername: {
      __typename?: "UserUpdateUsernamePayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      user?:
        | { __typename?: "User"; id: string; username?: string | null | undefined }
        | null
        | undefined
    }
  }

  export type BtcPriceListQueryVariables = Exact<{
    range: PriceGraphRange
  }>

  export type BtcPriceListQuery = {
    __typename?: "Query"
    btcPriceList?:
      | Array<
          | {
              __typename?: "PricePoint"
              timestamp: number
              price: {
                __typename?: "Price"
                base: number
                offset: number
                currencyUnit: ExchangeCurrencyUnit
                formattedAmount: string
              }
            }
          | null
          | undefined
        >
      | null
      | undefined
  }

  export type BusinessMapMarkersQueryVariables = Exact<{ [key: string]: never }>

  export type BusinessMapMarkersQuery = {
    __typename?: "Query"
    businessMapMarkers?:
      | Array<
          | {
              __typename?: "MapMarker"
              username?: string | null | undefined
              mapInfo: {
                __typename?: "MapInfo"
                title: string
                coordinates: {
                  __typename?: "Coordinates"
                  longitude: number
                  latitude: number
                }
              }
            }
          | null
          | undefined
        >
      | null
      | undefined
  }

  export type ContactsQueryVariables = Exact<{ [key: string]: never }>

  export type ContactsQuery = {
    __typename?: "Query"
    me?:
      | {
          __typename?: "User"
          id: string
          contacts: Array<{
            __typename?: "UserContact"
            username: string
            alias?: string | null | undefined
            transactionsCount: number
          }>
        }
      | null
      | undefined
  }

  export type GetWalletCsvTransactionsQueryVariables = Exact<{
    defaultWalletId: Scalars["WalletId"]
  }>

  export type GetWalletCsvTransactionsQuery = {
    __typename?: "Query"
    me?:
      | {
          __typename?: "User"
          id: string
          defaultAccount: {
            __typename?: "ConsumerAccount"
            id: string
            csvTransactions: string
          }
        }
      | null
      | undefined
  }

  export type MainQueryVariables = Exact<{
    hasToken: Scalars["Boolean"]
  }>

  export type MainQuery = {
    __typename?: "Query"
    globals?: { __typename?: "Globals"; nodesIds: Array<string> } | null | undefined
    btcPrice?:
      | {
          __typename?: "Price"
          base: number
          offset: number
          currencyUnit: ExchangeCurrencyUnit
          formattedAmount: string
        }
      | null
      | undefined
    me?:
      | {
          __typename?: "User"
          id: string
          username?: string | null | undefined
          language: string
          defaultAccount: {
            __typename?: "ConsumerAccount"
            id: string
            wallets: Array<{ __typename?: "BTCWallet"; id: string; balance: number }>
          }
        }
      | null
      | undefined
  }

  export type OnChainTxFeeQueryVariables = Exact<{
    walletId: Scalars["WalletId"]
    address: Scalars["OnChainAddress"]
    amount: Scalars["SatAmount"]
    targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
  }>

  export type OnChainTxFeeQuery = {
    __typename?: "Query"
    onChainTxFee: {
      __typename?: "OnChainTxFee"
      amount: number
      targetConfirmations: number
    }
  }

  export type QuizQuestionsQueryVariables = Exact<{ [key: string]: never }>

  export type QuizQuestionsQuery = {
    __typename?: "Query"
    quizQuestions?:
      | Array<
          | { __typename?: "QuizQuestion"; id: string; earnAmount: number }
          | null
          | undefined
        >
      | null
      | undefined
  }

  export type TransactionsListForContactQueryVariables = Exact<{
    username: Scalars["Username"]
    first?: InputMaybe<Scalars["Int"]>
    after?: InputMaybe<Scalars["String"]>
  }>

  export type TransactionsListForContactQuery = {
    __typename?: "Query"
    me?:
      | {
          __typename?: "User"
          id: string
          contactByUsername: {
            __typename?: "UserContact"
            transactions?:
              | {
                  __typename?: "TransactionConnection"
                  pageInfo: { __typename?: "PageInfo"; hasNextPage: boolean }
                  edges?:
                    | Array<
                        | {
                            __typename?: "TransactionEdge"
                            cursor: string
                            node?:
                              | {
                                  __typename: "Transaction"
                                  id: string
                                  status: TxStatus
                                  direction: TxDirection
                                  memo?: string | null | undefined
                                  createdAt: number
                                  settlementAmount: number
                                  settlementFee: number
                                  settlementPrice: {
                                    __typename?: "Price"
                                    base: number
                                    offset: number
                                  }
                                  initiationVia:
                                    | {
                                        __typename: "InitiationViaIntraLedger"
                                        counterPartyWalletId?: string | null | undefined
                                        counterPartyUsername?: string | null | undefined
                                      }
                                    | {
                                        __typename: "InitiationViaLn"
                                        paymentHash: string
                                      }
                                    | {
                                        __typename: "InitiationViaOnChain"
                                        address: string
                                      }
                                  settlementVia:
                                    | {
                                        __typename: "SettlementViaIntraLedger"
                                        counterPartyWalletId?: string | null | undefined
                                        counterPartyUsername?: string | null | undefined
                                      }
                                    | {
                                        __typename: "SettlementViaLn"
                                        paymentSecret?: string | null | undefined
                                      }
                                    | {
                                        __typename: "SettlementViaOnChain"
                                        transactionHash: string
                                      }
                                }
                              | null
                              | undefined
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                }
              | null
              | undefined
          }
        }
      | null
      | undefined
  }

  export type TransactionListQueryVariables = Exact<{
    first?: InputMaybe<Scalars["Int"]>
    after?: InputMaybe<Scalars["String"]>
  }>

  export type TransactionListQuery = {
    __typename?: "Query"
    me?:
      | {
          __typename?: "User"
          id: string
          defaultAccount: {
            __typename?: "ConsumerAccount"
            id: string
            wallets: Array<{
              __typename?: "BTCWallet"
              id: string
              transactions?:
                | {
                    __typename?: "TransactionConnection"
                    pageInfo: { __typename?: "PageInfo"; hasNextPage: boolean }
                    edges?:
                      | Array<
                          | {
                              __typename?: "TransactionEdge"
                              cursor: string
                              node?:
                                | {
                                    __typename: "Transaction"
                                    id: string
                                    status: TxStatus
                                    direction: TxDirection
                                    memo?: string | null | undefined
                                    createdAt: number
                                    settlementAmount: number
                                    settlementFee: number
                                    settlementPrice: {
                                      __typename?: "Price"
                                      base: number
                                      offset: number
                                    }
                                    initiationVia:
                                      | {
                                          __typename: "InitiationViaIntraLedger"
                                          counterPartyWalletId?: string | null | undefined
                                          counterPartyUsername?: string | null | undefined
                                        }
                                      | {
                                          __typename: "InitiationViaLn"
                                          paymentHash: string
                                        }
                                      | {
                                          __typename: "InitiationViaOnChain"
                                          address: string
                                        }
                                    settlementVia:
                                      | {
                                          __typename: "SettlementViaIntraLedger"
                                          counterPartyWalletId?: string | null | undefined
                                          counterPartyUsername?: string | null | undefined
                                        }
                                      | {
                                          __typename: "SettlementViaLn"
                                          paymentSecret?: string | null | undefined
                                        }
                                      | {
                                          __typename: "SettlementViaOnChain"
                                          transactionHash: string
                                        }
                                  }
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                        >
                      | null
                      | undefined
                  }
                | null
                | undefined
            }>
          }
        }
      | null
      | undefined
  }

  export type UserDefaultWalletIdQueryVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UserDefaultWalletIdQuery = {
    __typename?: "Query"
    userDefaultWalletId: string
  }

  export type UsernameAvailableQueryVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UsernameAvailableQuery = {
    __typename?: "Query"
    usernameAvailable?: boolean | null | undefined
  }

  export type MyUpdatesSubscriptionVariables = Exact<{ [key: string]: never }>

  export type MyUpdatesSubscription = {
    __typename?: "Subscription"
    myUpdates: {
      __typename?: "MyUpdatesPayload"
      errors: Array<
        | { __typename?: "InputError"; message: string }
        | { __typename?: "PaymentError"; message: string }
      >
      me?:
        | {
            __typename?: "User"
            id: string
            defaultAccount: {
              __typename?: "ConsumerAccount"
              id: string
              wallets: Array<{
                __typename?: "BTCWallet"
                id: string
                walletCurrency: WalletCurrency
                balance: number
              }>
            }
          }
        | null
        | undefined
      update?:
        | {
            __typename?: "IntraLedgerUpdate"
            walletId: string
            txNotificationType: TxNotificationType
            amount: number
            usdPerSat: number
            type: "IntraLedgerUpdate"
          }
        | {
            __typename?: "LnUpdate"
            walletId: string
            paymentHash: string
            status: InvoicePaymentStatus
            type: "LnUpdate"
          }
        | {
            __typename?: "OnChainUpdate"
            walletId: string
            txNotificationType: TxNotificationType
            txHash: string
            amount: number
            usdPerSat: number
            type: "OnChainUpdate"
          }
        | {
            __typename?: "Price"
            base: number
            offset: number
            currencyUnit: ExchangeCurrencyUnit
            formattedAmount: string
            type: "Price"
          }
        | null
        | undefined
    }
  }
}
