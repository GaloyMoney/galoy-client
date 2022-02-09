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
    readonly csvTransactions: Scalars["String"]
    readonly defaultWalletId: Scalars["WalletId"]
    readonly id: Scalars["ID"]
    readonly wallets: ReadonlyArray<Wallet>
  }

  export type AccountCsvTransactionsArgs = {
    walletIds: ReadonlyArray<Scalars["WalletId"]>
  }

  export type AccountApiKey = {
    readonly __typename?: "AccountApiKey"
    readonly expireAt: Scalars["Timestamp"]
    readonly key: Scalars["String"]
    readonly label: Scalars["AccountApiKeyLabel"]
    readonly secret: Scalars["String"]
  }

  export type AccountApiKeyCreateInput = {
    readonly expireAt: Scalars["Timestamp"]
    readonly label?: InputMaybe<Scalars["AccountApiKeyLabel"]>
  }

  export type AccountApiKeyDisableInput = {
    readonly label: Scalars["AccountApiKeyLabel"]
  }

  export type AccountApiKeyHashed = {
    readonly __typename?: "AccountApiKeyHashed"
    readonly expireAt: Scalars["Timestamp"]
    readonly label: Scalars["AccountApiKeyLabel"]
  }

  export type AccountApiKeyPayload = {
    readonly __typename?: "AccountApiKeyPayload"
    readonly accountApiKey?: Maybe<AccountApiKey>
    readonly errors: ReadonlyArray<Error>
  }

  export type AuthTokenPayload = {
    readonly __typename?: "AuthTokenPayload"
    readonly authToken?: Maybe<Scalars["AuthToken"]>
    readonly errors: ReadonlyArray<Error>
  }

  export type BtcWallet = Wallet & {
    readonly __typename?: "BTCWallet"
    readonly balance: Scalars["SignedAmount"]
    readonly id: Scalars["ID"]
    readonly transactions?: Maybe<TransactionConnection>
    readonly walletCurrency: WalletCurrency
  }

  export type BtcWalletTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type BuildInformation = {
    readonly __typename?: "BuildInformation"
    readonly buildTime?: Maybe<Scalars["Timestamp"]>
    readonly commitHash?: Maybe<Scalars["String"]>
    readonly helmRevision?: Maybe<Scalars["Int"]>
  }

  export type CaptchaCreateChallengePayload = {
    readonly __typename?: "CaptchaCreateChallengePayload"
    readonly errors: ReadonlyArray<Error>
    readonly result?: Maybe<CaptchaCreateChallengeResult>
  }

  export type CaptchaCreateChallengeResult = {
    readonly __typename?: "CaptchaCreateChallengeResult"
    readonly challengeCode: Scalars["String"]
    readonly failbackMode: Scalars["Boolean"]
    readonly id: Scalars["String"]
    readonly newCaptcha: Scalars["Boolean"]
  }

  export type CaptchaRequestAuthCodeInput = {
    readonly challengeCode: Scalars["String"]
    readonly phone: Scalars["Phone"]
    readonly secCode: Scalars["String"]
    readonly validationCode: Scalars["String"]
  }

  export type ConsumerAccount = Account & {
    readonly __typename?: "ConsumerAccount"
    /** return CSV stream, base64 encoded, of the list of transactions in the wallet */
    readonly csvTransactions: Scalars["String"]
    readonly defaultWalletId: Scalars["WalletId"]
    readonly id: Scalars["ID"]
    readonly wallets: ReadonlyArray<Wallet>
  }

  export type ConsumerAccountCsvTransactionsArgs = {
    walletIds: ReadonlyArray<Scalars["WalletId"]>
  }

  export type Coordinates = {
    readonly __typename?: "Coordinates"
    readonly latitude: Scalars["Float"]
    readonly longitude: Scalars["Float"]
  }

  export type DeviceNotificationTokenCreateInput = {
    readonly deviceToken: Scalars["String"]
  }

  export type Error = {
    readonly message: Scalars["String"]
    readonly path?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  }

  export type ExchangeCurrencyUnit = "BTCSAT" | "USDCENT"

  /** Provides global settings for the application which might have an impact for the user. */
  export type Globals = {
    readonly __typename?: "Globals"
    readonly buildInformation: BuildInformation
    /**
     * A list of public keys for the running lightning nodes.
     * This can be used to know if an invoice belongs to one of our nodes.
     */
    readonly nodesIds: ReadonlyArray<Scalars["String"]>
  }

  export type InitiationVia =
    | InitiationViaIntraLedger
    | InitiationViaLn
    | InitiationViaOnChain

  export type InitiationViaIntraLedger = {
    readonly __typename?: "InitiationViaIntraLedger"
    readonly counterPartyUsername?: Maybe<Scalars["Username"]>
    readonly counterPartyWalletId?: Maybe<Scalars["WalletId"]>
  }

  export type InitiationViaLn = {
    readonly __typename?: "InitiationViaLn"
    readonly paymentHash: Scalars["PaymentHash"]
  }

  export type InitiationViaOnChain = {
    readonly __typename?: "InitiationViaOnChain"
    readonly address: Scalars["OnChainAddress"]
  }

  export type InputError = Error & {
    readonly __typename?: "InputError"
    readonly code: InputErrorCode
    readonly message: Scalars["String"]
    readonly path?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  }

  export type InputErrorCode =
    | "INVALID_INPUT"
    | "VALUE_NOT_ALLOWED"
    | "VALUE_TOO_LONG"
    | "VALUE_TOO_SHORT"

  export type IntraLedgerPaymentSendInput = {
    readonly amount: Scalars["SatAmount"]
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly recipientWalletId: Scalars["WalletId"]
    readonly walletId: Scalars["WalletId"]
  }

  export type IntraLedgerUpdate = {
    readonly __typename?: "IntraLedgerUpdate"
    readonly amount: Scalars["SatAmount"]
    readonly txNotificationType: TxNotificationType
    readonly usdPerSat: Scalars["Float"]
    readonly walletId: Scalars["WalletId"]
  }

  export type InvoicePaymentStatus = "PAID" | "PENDING"

  export type LnInvoice = {
    readonly __typename?: "LnInvoice"
    readonly paymentHash: Scalars["PaymentHash"]
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly paymentSecret: Scalars["LnPaymentSecret"]
    readonly satoshis?: Maybe<Scalars["SatAmount"]>
  }

  export type LnInvoiceCreateInput = {
    readonly amount: Scalars["SatAmount"]
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly walletId: Scalars["WalletId"]
  }

  export type LnInvoiceCreateOnBehalfOfRecipientInput = {
    readonly amount: Scalars["SatAmount"]
    readonly descriptionHash?: InputMaybe<Scalars["Hex32Bytes"]>
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly recipientWalletId: Scalars["WalletId"]
  }

  export type LnInvoiceFeeProbeInput = {
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly walletId: Scalars["WalletId"]
  }

  export type LnInvoicePayload = {
    readonly __typename?: "LnInvoicePayload"
    readonly errors: ReadonlyArray<Error>
    readonly invoice?: Maybe<LnInvoice>
  }

  export type LnInvoicePaymentInput = {
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly walletId: Scalars["WalletId"]
  }

  export type LnInvoicePaymentStatusInput = {
    readonly paymentRequest: Scalars["LnPaymentRequest"]
  }

  export type LnInvoicePaymentStatusPayload = {
    readonly __typename?: "LnInvoicePaymentStatusPayload"
    readonly errors: ReadonlyArray<Error>
    readonly status?: Maybe<InvoicePaymentStatus>
  }

  export type LnNoAmountInvoice = {
    readonly __typename?: "LnNoAmountInvoice"
    readonly paymentHash: Scalars["PaymentHash"]
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly paymentSecret: Scalars["LnPaymentSecret"]
  }

  export type LnNoAmountInvoiceCreateInput = {
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly walletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoiceCreateOnBehalfOfRecipientInput = {
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly recipientWalletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoiceFeeProbeInput = {
    readonly amount: Scalars["SatAmount"]
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly walletId: Scalars["WalletId"]
  }

  export type LnNoAmountInvoicePayload = {
    readonly __typename?: "LnNoAmountInvoicePayload"
    readonly errors: ReadonlyArray<Error>
    readonly invoice?: Maybe<LnNoAmountInvoice>
  }

  export type LnNoAmountInvoicePaymentInput = {
    readonly amount: Scalars["SatAmount"]
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly paymentRequest: Scalars["LnPaymentRequest"]
    readonly walletId: Scalars["WalletId"]
  }

  export type LnUpdate = {
    readonly __typename?: "LnUpdate"
    readonly paymentHash: Scalars["PaymentHash"]
    readonly status: InvoicePaymentStatus
    readonly walletId: Scalars["WalletId"]
  }

  export type MapInfo = {
    readonly __typename?: "MapInfo"
    readonly coordinates: Coordinates
    readonly title: Scalars["String"]
  }

  export type MapMarker = {
    readonly __typename?: "MapMarker"
    readonly mapInfo: MapInfo
    readonly username?: Maybe<Scalars["Username"]>
  }

  export type MobileVersions = {
    readonly __typename?: "MobileVersions"
    readonly currentSupported: Scalars["Int"]
    readonly minSupported: Scalars["Int"]
    readonly platform: Scalars["String"]
  }

  export type Mutation = {
    readonly __typename?: "Mutation"
    readonly accountApiKeyCreate: AccountApiKeyPayload
    readonly accountApiKeyDisable: SuccessPayload
    readonly captchaCreateChallenge: CaptchaCreateChallengePayload
    readonly captchaRequestAuthCode: SuccessPayload
    readonly deviceNotificationTokenCreate: SuccessPayload
    readonly intraLedgerPaymentSend: PaymentSendPayload
    readonly lnInvoiceCreate: LnInvoicePayload
    readonly lnInvoiceCreateOnBehalfOfRecipient: LnInvoicePayload
    readonly lnInvoiceFeeProbe: SatAmountPayload
    readonly lnInvoicePaymentSend: PaymentSendPayload
    readonly lnNoAmountInvoiceCreate: LnNoAmountInvoicePayload
    readonly lnNoAmountInvoiceCreateOnBehalfOfRecipient: LnNoAmountInvoicePayload
    readonly lnNoAmountInvoiceFeeProbe: SatAmountPayload
    readonly lnNoAmountInvoicePaymentSend: PaymentSendPayload
    readonly onChainAddressCreate: OnChainAddressPayload
    readonly onChainAddressCurrent: OnChainAddressPayload
    readonly onChainPaymentSend: PaymentSendPayload
    readonly onChainPaymentSendAll: PaymentSendPayload
    readonly twoFADelete: SuccessPayload
    readonly twoFAGenerate: TwoFaGeneratePayload
    readonly twoFASave: SuccessPayload
    /** @deprecated will be moved to AccountContact */
    readonly userContactUpdateAlias: UserContactUpdateAliasPayload
    readonly userLogin: AuthTokenPayload
    readonly userQuizQuestionUpdateCompleted: UserQuizQuestionUpdateCompletedPayload
    readonly userRequestAuthCode: SuccessPayload
    readonly userUpdateLanguage: UserUpdateLanguagePayload
    /** @deprecated Username will be moved to @Handle in Accounts. Also SetUsername should be used instead of UpdateUsername to reflect the idempotency of Handles */
    readonly userUpdateUsername: UserUpdateUsernamePayload
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
    readonly __typename?: "MyUpdatesPayload"
    readonly errors: ReadonlyArray<Error>
    readonly me?: Maybe<User>
    readonly update?: Maybe<UserUpdate>
  }

  export type OnChainAddressCreateInput = {
    readonly walletId: Scalars["WalletId"]
  }

  export type OnChainAddressCurrentInput = {
    readonly walletId: Scalars["WalletId"]
  }

  export type OnChainAddressPayload = {
    readonly __typename?: "OnChainAddressPayload"
    readonly address?: Maybe<Scalars["OnChainAddress"]>
    readonly errors: ReadonlyArray<Error>
  }

  export type OnChainPaymentSendAllInput = {
    readonly address: Scalars["OnChainAddress"]
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
    readonly walletId: Scalars["WalletId"]
  }

  export type OnChainPaymentSendInput = {
    readonly address: Scalars["OnChainAddress"]
    readonly amount: Scalars["SatAmount"]
    readonly memo?: InputMaybe<Scalars["Memo"]>
    readonly targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
    readonly walletId: Scalars["WalletId"]
  }

  export type OnChainTxFee = {
    readonly __typename?: "OnChainTxFee"
    readonly amount: Scalars["SatAmount"]
    readonly targetConfirmations: Scalars["TargetConfirmations"]
  }

  export type OnChainUpdate = {
    readonly __typename?: "OnChainUpdate"
    readonly amount: Scalars["SatAmount"]
    readonly txHash: Scalars["OnChainTxHash"]
    readonly txNotificationType: TxNotificationType
    readonly usdPerSat: Scalars["Float"]
    readonly walletId: Scalars["WalletId"]
  }

  /** Information about pagination in a connection. */
  export type PageInfo = {
    readonly __typename?: "PageInfo"
    /** When paginating forwards, the cursor to continue. */
    readonly endCursor?: Maybe<Scalars["String"]>
    /** When paginating forwards, are there more items? */
    readonly hasNextPage: Scalars["Boolean"]
    /** When paginating backwards, are there more items? */
    readonly hasPreviousPage: Scalars["Boolean"]
    /** When paginating backwards, the cursor to continue. */
    readonly startCursor?: Maybe<Scalars["String"]>
  }

  export type PaymentError = Error & {
    readonly __typename?: "PaymentError"
    readonly code: PaymentErrorCode
    readonly message: Scalars["String"]
    readonly path?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  }

  export type PaymentErrorCode =
    | "ACCOUNT_LOCKED"
    | "INSUFFICIENT_BALANCE"
    | "INVOICE_PAID"
    | "LIMIT_EXCEEDED"
    | "NO_LIQUIDITY"
    | "NO_ROUTE"

  export type PaymentSendPayload = {
    readonly __typename?: "PaymentSendPayload"
    readonly errors: ReadonlyArray<Error>
    readonly status?: Maybe<PaymentSendResult>
  }

  export type PaymentSendResult = "ALREADY_PAID" | "FAILURE" | "PENDING" | "SUCCESS"

  /** Price amount expressed in base/offset. To calculate, use: `base / 10^offset` */
  export type Price = {
    readonly __typename?: "Price"
    readonly base: Scalars["SafeInt"]
    readonly currencyUnit: ExchangeCurrencyUnit
    readonly formattedAmount: Scalars["String"]
    readonly offset: Scalars["Int"]
  }

  /** The range for the X axis in the BTC price graph */
  export type PriceGraphRange =
    | "FIVE_YEARS"
    | "ONE_DAY"
    | "ONE_MONTH"
    | "ONE_WEEK"
    | "ONE_YEAR"

  export type PriceInput = {
    readonly amount: Scalars["SatAmount"]
    readonly amountCurrencyUnit: ExchangeCurrencyUnit
    readonly priceCurrencyUnit: ExchangeCurrencyUnit
  }

  export type PricePayload = {
    readonly __typename?: "PricePayload"
    readonly errors: ReadonlyArray<Error>
    readonly price?: Maybe<Price>
  }

  export type PricePoint = {
    readonly __typename?: "PricePoint"
    readonly price: Price
    /** Unix timesamp (number of seconds elapsed since January 1, 1970 00:00:00 UTC) */
    readonly timestamp: Scalars["Timestamp"]
  }

  export type Query = {
    readonly __typename?: "Query"
    readonly accountApiKeys?: Maybe<ReadonlyArray<Maybe<AccountApiKeyHashed>>>
    readonly btcPrice?: Maybe<Price>
    readonly btcPriceList?: Maybe<ReadonlyArray<Maybe<PricePoint>>>
    readonly businessMapMarkers?: Maybe<ReadonlyArray<Maybe<MapMarker>>>
    readonly globals?: Maybe<Globals>
    readonly me?: Maybe<User>
    readonly mobileVersions?: Maybe<ReadonlyArray<Maybe<MobileVersions>>>
    readonly onChainTxFee: OnChainTxFee
    readonly quizQuestions?: Maybe<ReadonlyArray<Maybe<QuizQuestion>>>
    /** @deprecated will be migrated to AccountDefaultWalletId */
    readonly userDefaultWalletId: Scalars["WalletId"]
    readonly usernameAvailable?: Maybe<Scalars["Boolean"]>
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
    readonly __typename?: "QuizQuestion"
    /** The earn reward in Satoshis for the quiz question */
    readonly earnAmount: Scalars["SatAmount"]
    readonly id: Scalars["ID"]
  }

  export type SatAmountPayload = {
    readonly __typename?: "SatAmountPayload"
    readonly amount?: Maybe<Scalars["SatAmount"]>
    readonly errors: ReadonlyArray<Error>
  }

  export type SettlementVia =
    | SettlementViaIntraLedger
    | SettlementViaLn
    | SettlementViaOnChain

  export type SettlementViaIntraLedger = {
    readonly __typename?: "SettlementViaIntraLedger"
    /** Settlement destination: Could be null if the payee does not have a username */
    readonly counterPartyUsername?: Maybe<Scalars["Username"]>
    readonly counterPartyWalletId?: Maybe<Scalars["WalletId"]>
  }

  export type SettlementViaLn = {
    readonly __typename?: "SettlementViaLn"
    /** @deprecated Shifting property to 'preImage' to improve granularity of the LnPaymentSecret type */
    readonly paymentSecret?: Maybe<Scalars["LnPaymentSecret"]>
    readonly preImage?: Maybe<Scalars["LnPaymentPreImage"]>
  }

  export type SettlementViaOnChain = {
    readonly __typename?: "SettlementViaOnChain"
    readonly transactionHash: Scalars["OnChainTxHash"]
  }

  export type Subscription = {
    readonly __typename?: "Subscription"
    readonly lnInvoicePaymentStatus: LnInvoicePaymentStatusPayload
    readonly myUpdates: MyUpdatesPayload
    readonly price: PricePayload
  }

  export type SubscriptionLnInvoicePaymentStatusArgs = {
    input: LnInvoicePaymentStatusInput
  }

  export type SubscriptionPriceArgs = {
    input: PriceInput
  }

  export type SuccessPayload = {
    readonly __typename?: "SuccessPayload"
    readonly errors: ReadonlyArray<Error>
    readonly success?: Maybe<Scalars["Boolean"]>
  }

  /**
   * Give details about an individual transaction.
   * Galoy have a smart routing system which is automatically
   * settling intraledger when both the payer and payee use the same wallet
   * therefore it's possible the transactions is being initiated onchain
   * or with lightning but settled intraledger.
   */
  export type Transaction = {
    readonly __typename?: "Transaction"
    readonly createdAt: Scalars["Timestamp"]
    readonly direction: TxDirection
    readonly id: Scalars["ID"]
    /** From which protocol the payment has been initiated. */
    readonly initiationVia: InitiationVia
    readonly memo?: Maybe<Scalars["Memo"]>
    /** Amount of sats sent or received. */
    readonly settlementAmount: Scalars["SatAmount"]
    readonly settlementFee: Scalars["SatAmount"]
    /** Price in USDCENT/SATS at time of settlement. */
    readonly settlementPrice: Price
    /** To which protocol the payment has settled on. */
    readonly settlementVia: SettlementVia
    readonly status: TxStatus
  }

  /** A connection to a list of items. */
  export type TransactionConnection = {
    readonly __typename?: "TransactionConnection"
    /** A list of edges. */
    readonly edges?: Maybe<ReadonlyArray<TransactionEdge>>
    /** Information to aid in pagination. */
    readonly pageInfo: PageInfo
  }

  /** An edge in a connection. */
  export type TransactionEdge = {
    readonly __typename?: "TransactionEdge"
    /** A cursor for use in pagination */
    readonly cursor: Scalars["String"]
    /** The item at the end of the edge */
    readonly node: Transaction
  }

  export type TwoFaDeleteInput = {
    readonly token: Scalars["String"]
  }

  export type TwoFaGeneratePayload = {
    readonly __typename?: "TwoFAGeneratePayload"
    readonly errors: ReadonlyArray<Error>
    readonly twoFASecret?: Maybe<TwoFaSecret>
  }

  export type TwoFaSaveInput = {
    readonly secret: Scalars["String"]
    readonly token: Scalars["String"]
  }

  export type TwoFaSecret = {
    readonly __typename?: "TwoFASecret"
    readonly secret: Scalars["String"]
    readonly uri: Scalars["String"]
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
    readonly __typename?: "User"
    /**
     * Get single contact details.
     * Can include the transactions associated with the contact.
     */
    readonly contactByUsername: UserContact
    /**
     * Get full list of contacts.
     * Can include the transactions associated with each contact.
     * @deprecated will be moved to account
     */
    readonly contacts: ReadonlyArray<UserContact>
    readonly createdAt: Scalars["Timestamp"]
    readonly defaultAccount: Account
    readonly id: Scalars["ID"]
    /**
     * Preferred language for user.
     * When value is 'default' the intent is to use preferred language from OS settings.
     */
    readonly language: Scalars["Language"]
    /** Phone number with international calling code. */
    readonly phone: Scalars["Phone"]
    /** List the quiz questions the user may have completed. */
    readonly quizQuestions: ReadonlyArray<UserQuizQuestion>
    readonly twoFAEnabled?: Maybe<Scalars["Boolean"]>
    /**
     * Optional immutable user friendly identifier.
     * @deprecated will be moved to @Handle in Account and Wallet
     */
    readonly username?: Maybe<Scalars["Username"]>
  }

  export type UserContactByUsernameArgs = {
    username: Scalars["Username"]
  }

  export type UserContact = {
    readonly __typename?: "UserContact"
    /**
     * Alias the user can set for this contact.
     * Only the user can see the alias attached to their contact.
     */
    readonly alias?: Maybe<Scalars["ContactAlias"]>
    readonly id: Scalars["Username"]
    /** Paginated list of transactions sent to/from this contact. */
    readonly transactions?: Maybe<TransactionConnection>
    readonly transactionsCount: Scalars["Int"]
    /** Actual identifier of the contact. */
    readonly username: Scalars["Username"]
  }

  export type UserContactTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type UserContactUpdateAliasInput = {
    readonly alias: Scalars["ContactAlias"]
    readonly username: Scalars["Username"]
  }

  export type UserContactUpdateAliasPayload = {
    readonly __typename?: "UserContactUpdateAliasPayload"
    readonly contact?: Maybe<UserContact>
    readonly errors: ReadonlyArray<Error>
  }

  export type UserLoginInput = {
    readonly code: Scalars["OneTimeAuthCode"]
    readonly phone: Scalars["Phone"]
  }

  export type UserQuizQuestion = {
    readonly __typename?: "UserQuizQuestion"
    readonly completed: Scalars["Boolean"]
    readonly question: QuizQuestion
  }

  export type UserQuizQuestionUpdateCompletedInput = {
    readonly id: Scalars["ID"]
  }

  export type UserQuizQuestionUpdateCompletedPayload = {
    readonly __typename?: "UserQuizQuestionUpdateCompletedPayload"
    readonly errors: ReadonlyArray<Error>
    readonly userQuizQuestion?: Maybe<UserQuizQuestion>
  }

  export type UserRequestAuthCodeInput = {
    readonly phone: Scalars["Phone"]
  }

  export type UserUpdate = IntraLedgerUpdate | LnUpdate | OnChainUpdate | Price

  export type UserUpdateLanguageInput = {
    readonly language: Scalars["Language"]
  }

  export type UserUpdateLanguagePayload = {
    readonly __typename?: "UserUpdateLanguagePayload"
    readonly errors: ReadonlyArray<Error>
    readonly user?: Maybe<User>
  }

  export type UserUpdateUsernameInput = {
    readonly username: Scalars["Username"]
  }

  export type UserUpdateUsernamePayload = {
    readonly __typename?: "UserUpdateUsernamePayload"
    readonly errors: ReadonlyArray<Error>
    readonly user?: Maybe<User>
  }

  export type Wallet = {
    readonly balance: Scalars["SignedAmount"]
    readonly id: Scalars["ID"]
    /**
     * Transactions are ordered anti-chronogically,
     * ie: the newest transaction will be first
     */
    readonly transactions?: Maybe<TransactionConnection>
    readonly walletCurrency: WalletCurrency
  }

  export type WalletTransactionsArgs = {
    after?: InputMaybe<Scalars["String"]>
    before?: InputMaybe<Scalars["String"]>
    first?: InputMaybe<Scalars["Int"]>
    last?: InputMaybe<Scalars["Int"]>
  }

  export type WalletCurrency = "BTC"

  export type MeFragment = {
    readonly __typename?: "User"
    readonly id: string
    readonly language: string
    readonly username?: string | null
    readonly phone: string
    readonly defaultAccount: {
      readonly __typename?: "ConsumerAccount"
      readonly id: string
      readonly defaultWalletId: string
      readonly wallets: ReadonlyArray<{
        readonly __typename?: "BTCWallet"
        readonly id: string
        readonly balance: number
        readonly walletCurrency: WalletCurrency
        readonly transactions?: {
          readonly __typename?: "TransactionConnection"
          readonly pageInfo: {
            readonly __typename?: "PageInfo"
            readonly hasNextPage: boolean
            readonly hasPreviousPage: boolean
            readonly startCursor?: string | null
            readonly endCursor?: string | null
          }
          readonly edges?: ReadonlyArray<{
            readonly __typename?: "TransactionEdge"
            readonly cursor: string
            readonly node: {
              readonly __typename: "Transaction"
              readonly id: string
              readonly status: TxStatus
              readonly direction: TxDirection
              readonly memo?: string | null
              readonly createdAt: number
              readonly settlementAmount: number
              readonly settlementFee: number
              readonly settlementPrice: {
                readonly __typename?: "Price"
                readonly base: number
                readonly offset: number
                readonly currencyUnit: ExchangeCurrencyUnit
                readonly formattedAmount: string
              }
              readonly initiationVia:
                | {
                    readonly __typename: "InitiationViaIntraLedger"
                    readonly counterPartyWalletId?: string | null
                    readonly counterPartyUsername?: string | null
                  }
                | { readonly __typename: "InitiationViaLn"; readonly paymentHash: string }
                | {
                    readonly __typename: "InitiationViaOnChain"
                    readonly address: string
                  }
              readonly settlementVia:
                | {
                    readonly __typename: "SettlementViaIntraLedger"
                    readonly counterPartyWalletId?: string | null
                    readonly counterPartyUsername?: string | null
                  }
                | {
                    readonly __typename: "SettlementViaLn"
                    readonly paymentSecret?: string | null
                  }
                | {
                    readonly __typename: "SettlementViaOnChain"
                    readonly transactionHash: string
                  }
            }
          }> | null
        } | null
      }>
    }
  }

  export type TransactionListFragment = {
    readonly __typename?: "TransactionConnection"
    readonly pageInfo: {
      readonly __typename?: "PageInfo"
      readonly hasNextPage: boolean
      readonly hasPreviousPage: boolean
      readonly startCursor?: string | null
      readonly endCursor?: string | null
    }
    readonly edges?: ReadonlyArray<{
      readonly __typename?: "TransactionEdge"
      readonly cursor: string
      readonly node: {
        readonly __typename: "Transaction"
        readonly id: string
        readonly status: TxStatus
        readonly direction: TxDirection
        readonly memo?: string | null
        readonly createdAt: number
        readonly settlementAmount: number
        readonly settlementFee: number
        readonly settlementPrice: {
          readonly __typename?: "Price"
          readonly base: number
          readonly offset: number
          readonly currencyUnit: ExchangeCurrencyUnit
          readonly formattedAmount: string
        }
        readonly initiationVia:
          | {
              readonly __typename: "InitiationViaIntraLedger"
              readonly counterPartyWalletId?: string | null
              readonly counterPartyUsername?: string | null
            }
          | { readonly __typename: "InitiationViaLn"; readonly paymentHash: string }
          | { readonly __typename: "InitiationViaOnChain"; readonly address: string }
        readonly settlementVia:
          | {
              readonly __typename: "SettlementViaIntraLedger"
              readonly counterPartyWalletId?: string | null
              readonly counterPartyUsername?: string | null
            }
          | {
              readonly __typename: "SettlementViaLn"
              readonly paymentSecret?: string | null
            }
          | {
              readonly __typename: "SettlementViaOnChain"
              readonly transactionHash: string
            }
      }
    }> | null
  }

  export type CaptchaCreateChallengeMutationVariables = Exact<{ [key: string]: never }>

  export type CaptchaCreateChallengeMutation = {
    readonly __typename?: "Mutation"
    readonly captchaCreateChallenge: {
      readonly __typename?: "CaptchaCreateChallengePayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly result?: {
        readonly __typename?: "CaptchaCreateChallengeResult"
        readonly id: string
        readonly challengeCode: string
        readonly newCaptcha: boolean
        readonly failbackMode: boolean
      } | null
    }
  }

  export type CaptchaRequestAuthCodeMutationVariables = Exact<{
    input: CaptchaRequestAuthCodeInput
  }>

  export type CaptchaRequestAuthCodeMutation = {
    readonly __typename?: "Mutation"
    readonly captchaRequestAuthCode: {
      readonly __typename?: "SuccessPayload"
      readonly success?: boolean | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type DeviceNotificationTokenCreateMutationVariables = Exact<{
    deviceToken: Scalars["String"]
  }>

  export type DeviceNotificationTokenCreateMutation = {
    readonly __typename?: "Mutation"
    readonly deviceNotificationTokenCreate: {
      readonly __typename?: "SuccessPayload"
      readonly success?: boolean | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type IntraLedgerPaymentSendMutationVariables = Exact<{
    input: IntraLedgerPaymentSendInput
  }>

  export type IntraLedgerPaymentSendMutation = {
    readonly __typename?: "Mutation"
    readonly intraLedgerPaymentSend: {
      readonly __typename?: "PaymentSendPayload"
      readonly status?: PaymentSendResult | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type LnInvoiceCreateMutationVariables = Exact<{
    input: LnInvoiceCreateInput
  }>

  export type LnInvoiceCreateMutation = {
    readonly __typename?: "Mutation"
    readonly lnInvoiceCreate: {
      readonly __typename?: "LnInvoicePayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly invoice?: {
        readonly __typename?: "LnInvoice"
        readonly paymentRequest: string
        readonly paymentHash: string
      } | null
    }
  }

  export type LnInvoiceFeeProbeMutationVariables = Exact<{
    input: LnInvoiceFeeProbeInput
  }>

  export type LnInvoiceFeeProbeMutation = {
    readonly __typename?: "Mutation"
    readonly lnInvoiceFeeProbe: {
      readonly __typename?: "SatAmountPayload"
      readonly amount?: number | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type LnInvoicePaymentSendMutationVariables = Exact<{
    input: LnInvoicePaymentInput
  }>

  export type LnInvoicePaymentSendMutation = {
    readonly __typename?: "Mutation"
    readonly lnInvoicePaymentSend: {
      readonly __typename?: "PaymentSendPayload"
      readonly status?: PaymentSendResult | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type LnNoAmountInvoiceCreateMutationVariables = Exact<{
    input: LnNoAmountInvoiceCreateInput
  }>

  export type LnNoAmountInvoiceCreateMutation = {
    readonly __typename?: "Mutation"
    readonly lnNoAmountInvoiceCreate: {
      readonly __typename?: "LnNoAmountInvoicePayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly invoice?: {
        readonly __typename?: "LnNoAmountInvoice"
        readonly paymentRequest: string
        readonly paymentHash: string
      } | null
    }
  }

  export type LnNoAmountInvoiceFeeProbeMutationVariables = Exact<{
    input: LnNoAmountInvoiceFeeProbeInput
  }>

  export type LnNoAmountInvoiceFeeProbeMutation = {
    readonly __typename?: "Mutation"
    readonly lnNoAmountInvoiceFeeProbe: {
      readonly __typename?: "SatAmountPayload"
      readonly amount?: number | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type LnNoAmountInvoicePaymentSendMutationVariables = Exact<{
    input: LnNoAmountInvoicePaymentInput
  }>

  export type LnNoAmountInvoicePaymentSendMutation = {
    readonly __typename?: "Mutation"
    readonly lnNoAmountInvoicePaymentSend: {
      readonly __typename?: "PaymentSendPayload"
      readonly status?: PaymentSendResult | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type OnChainAddressCurrentMutationVariables = Exact<{
    input: OnChainAddressCurrentInput
  }>

  export type OnChainAddressCurrentMutation = {
    readonly __typename?: "Mutation"
    readonly onChainAddressCurrent: {
      readonly __typename?: "OnChainAddressPayload"
      readonly address?: string | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type OnChainPaymentSendMutationVariables = Exact<{
    input: OnChainPaymentSendInput
  }>

  export type OnChainPaymentSendMutation = {
    readonly __typename?: "Mutation"
    readonly onChainPaymentSend: {
      readonly __typename?: "PaymentSendPayload"
      readonly status?: PaymentSendResult | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type UserContactUpdateAliasMutationVariables = Exact<{
    input: UserContactUpdateAliasInput
  }>

  export type UserContactUpdateAliasMutation = {
    readonly __typename?: "Mutation"
    readonly userContactUpdateAlias: {
      readonly __typename?: "UserContactUpdateAliasPayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type UserLoginMutationVariables = Exact<{
    input: UserLoginInput
  }>

  export type UserLoginMutation = {
    readonly __typename?: "Mutation"
    readonly userLogin: {
      readonly __typename?: "AuthTokenPayload"
      readonly authToken?: string | null
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
    }
  }

  export type UserQuizQuestionUpdateCompletedMutationVariables = Exact<{
    input: UserQuizQuestionUpdateCompletedInput
  }>

  export type UserQuizQuestionUpdateCompletedMutation = {
    readonly __typename?: "Mutation"
    readonly userQuizQuestionUpdateCompleted: {
      readonly __typename?: "UserQuizQuestionUpdateCompletedPayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly userQuizQuestion?: {
        readonly __typename?: "UserQuizQuestion"
        readonly completed: boolean
        readonly question: {
          readonly __typename?: "QuizQuestion"
          readonly id: string
          readonly earnAmount: number
        }
      } | null
    }
  }

  export type UpdateLanguageMutationVariables = Exact<{
    language: Scalars["Language"]
  }>

  export type UpdateLanguageMutation = {
    readonly __typename?: "Mutation"
    readonly userUpdateLanguage: {
      readonly __typename?: "UserUpdateLanguagePayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly user?: {
        readonly __typename?: "User"
        readonly id: string
        readonly language: string
      } | null
    }
  }

  export type UpdateUsernameMutationVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UpdateUsernameMutation = {
    readonly __typename?: "Mutation"
    readonly userUpdateUsername: {
      readonly __typename?: "UserUpdateUsernamePayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly user?: {
        readonly __typename?: "User"
        readonly id: string
        readonly username?: string | null
      } | null
    }
  }

  export type BtcPriceListQueryVariables = Exact<{
    range: PriceGraphRange
  }>

  export type BtcPriceListQuery = {
    readonly __typename?: "Query"
    readonly btcPriceList?: ReadonlyArray<{
      readonly __typename?: "PricePoint"
      readonly timestamp: number
      readonly price: {
        readonly __typename?: "Price"
        readonly base: number
        readonly offset: number
        readonly currencyUnit: ExchangeCurrencyUnit
        readonly formattedAmount: string
      }
    } | null> | null
  }

  export type BusinessMapMarkersQueryVariables = Exact<{ [key: string]: never }>

  export type BusinessMapMarkersQuery = {
    readonly __typename?: "Query"
    readonly businessMapMarkers?: ReadonlyArray<{
      readonly __typename?: "MapMarker"
      readonly username?: string | null
      readonly mapInfo: {
        readonly __typename?: "MapInfo"
        readonly title: string
        readonly coordinates: {
          readonly __typename?: "Coordinates"
          readonly longitude: number
          readonly latitude: number
        }
      }
    } | null> | null
  }

  export type ContactsQueryVariables = Exact<{ [key: string]: never }>

  export type ContactsQuery = {
    readonly __typename?: "Query"
    readonly me?: {
      readonly __typename?: "User"
      readonly id: string
      readonly contacts: ReadonlyArray<{
        readonly __typename?: "UserContact"
        readonly username: string
        readonly alias?: string | null
        readonly transactionsCount: number
      }>
    } | null
  }

  export type GetWalletCsvTransactionsQueryVariables = Exact<{
    defaultWalletId: Scalars["WalletId"]
  }>

  export type GetWalletCsvTransactionsQuery = {
    readonly __typename?: "Query"
    readonly me?: {
      readonly __typename?: "User"
      readonly id: string
      readonly defaultAccount: {
        readonly __typename?: "ConsumerAccount"
        readonly id: string
        readonly csvTransactions: string
      }
    } | null
  }

  export type MainQueryVariables = Exact<{
    hasToken: Scalars["Boolean"]
    recentTransactions?: InputMaybe<Scalars["Int"]>
  }>

  export type MainQuery = {
    readonly __typename?: "Query"
    readonly globals?: {
      readonly __typename?: "Globals"
      readonly nodesIds: ReadonlyArray<string>
    } | null
    readonly btcPrice?: {
      readonly __typename?: "Price"
      readonly base: number
      readonly offset: number
      readonly currencyUnit: ExchangeCurrencyUnit
      readonly formattedAmount: string
    } | null
    readonly me?: {
      readonly __typename?: "User"
      readonly id: string
      readonly language: string
      readonly username?: string | null
      readonly phone: string
      readonly defaultAccount: {
        readonly __typename?: "ConsumerAccount"
        readonly id: string
        readonly defaultWalletId: string
        readonly wallets: ReadonlyArray<{
          readonly __typename?: "BTCWallet"
          readonly id: string
          readonly balance: number
          readonly walletCurrency: WalletCurrency
          readonly transactions?: {
            readonly __typename?: "TransactionConnection"
            readonly pageInfo: {
              readonly __typename?: "PageInfo"
              readonly hasNextPage: boolean
              readonly hasPreviousPage: boolean
              readonly startCursor?: string | null
              readonly endCursor?: string | null
            }
            readonly edges?: ReadonlyArray<{
              readonly __typename?: "TransactionEdge"
              readonly cursor: string
              readonly node: {
                readonly __typename: "Transaction"
                readonly id: string
                readonly status: TxStatus
                readonly direction: TxDirection
                readonly memo?: string | null
                readonly createdAt: number
                readonly settlementAmount: number
                readonly settlementFee: number
                readonly settlementPrice: {
                  readonly __typename?: "Price"
                  readonly base: number
                  readonly offset: number
                  readonly currencyUnit: ExchangeCurrencyUnit
                  readonly formattedAmount: string
                }
                readonly initiationVia:
                  | {
                      readonly __typename: "InitiationViaIntraLedger"
                      readonly counterPartyWalletId?: string | null
                      readonly counterPartyUsername?: string | null
                    }
                  | {
                      readonly __typename: "InitiationViaLn"
                      readonly paymentHash: string
                    }
                  | {
                      readonly __typename: "InitiationViaOnChain"
                      readonly address: string
                    }
                readonly settlementVia:
                  | {
                      readonly __typename: "SettlementViaIntraLedger"
                      readonly counterPartyWalletId?: string | null
                      readonly counterPartyUsername?: string | null
                    }
                  | {
                      readonly __typename: "SettlementViaLn"
                      readonly paymentSecret?: string | null
                    }
                  | {
                      readonly __typename: "SettlementViaOnChain"
                      readonly transactionHash: string
                    }
              }
            }> | null
          } | null
        }>
      }
    } | null
  }

  export type OnChainTxFeeQueryVariables = Exact<{
    walletId: Scalars["WalletId"]
    address: Scalars["OnChainAddress"]
    amount: Scalars["SatAmount"]
    targetConfirmations?: InputMaybe<Scalars["TargetConfirmations"]>
  }>

  export type OnChainTxFeeQuery = {
    readonly __typename?: "Query"
    readonly onChainTxFee: {
      readonly __typename?: "OnChainTxFee"
      readonly amount: number
      readonly targetConfirmations: number
    }
  }

  export type QuizQuestionsQueryVariables = Exact<{ [key: string]: never }>

  export type QuizQuestionsQuery = {
    readonly __typename?: "Query"
    readonly quizQuestions?: ReadonlyArray<{
      readonly __typename?: "QuizQuestion"
      readonly id: string
      readonly earnAmount: number
    } | null> | null
  }

  export type TransactionListForContactQueryVariables = Exact<{
    username: Scalars["Username"]
    first?: InputMaybe<Scalars["Int"]>
    after?: InputMaybe<Scalars["String"]>
    last?: InputMaybe<Scalars["Int"]>
    before?: InputMaybe<Scalars["String"]>
  }>

  export type TransactionListForContactQuery = {
    readonly __typename?: "Query"
    readonly me?: {
      readonly __typename?: "User"
      readonly id: string
      readonly contactByUsername: {
        readonly __typename?: "UserContact"
        readonly transactions?: {
          readonly __typename?: "TransactionConnection"
          readonly pageInfo: {
            readonly __typename?: "PageInfo"
            readonly hasNextPage: boolean
            readonly hasPreviousPage: boolean
            readonly startCursor?: string | null
            readonly endCursor?: string | null
          }
          readonly edges?: ReadonlyArray<{
            readonly __typename?: "TransactionEdge"
            readonly cursor: string
            readonly node: {
              readonly __typename: "Transaction"
              readonly id: string
              readonly status: TxStatus
              readonly direction: TxDirection
              readonly memo?: string | null
              readonly createdAt: number
              readonly settlementAmount: number
              readonly settlementFee: number
              readonly settlementPrice: {
                readonly __typename?: "Price"
                readonly base: number
                readonly offset: number
                readonly currencyUnit: ExchangeCurrencyUnit
                readonly formattedAmount: string
              }
              readonly initiationVia:
                | {
                    readonly __typename: "InitiationViaIntraLedger"
                    readonly counterPartyWalletId?: string | null
                    readonly counterPartyUsername?: string | null
                  }
                | { readonly __typename: "InitiationViaLn"; readonly paymentHash: string }
                | {
                    readonly __typename: "InitiationViaOnChain"
                    readonly address: string
                  }
              readonly settlementVia:
                | {
                    readonly __typename: "SettlementViaIntraLedger"
                    readonly counterPartyWalletId?: string | null
                    readonly counterPartyUsername?: string | null
                  }
                | {
                    readonly __typename: "SettlementViaLn"
                    readonly paymentSecret?: string | null
                  }
                | {
                    readonly __typename: "SettlementViaOnChain"
                    readonly transactionHash: string
                  }
            }
          }> | null
        } | null
      }
    } | null
  }

  export type TransactionListQueryVariables = Exact<{
    first?: InputMaybe<Scalars["Int"]>
    after?: InputMaybe<Scalars["String"]>
    last?: InputMaybe<Scalars["Int"]>
    before?: InputMaybe<Scalars["String"]>
  }>

  export type TransactionListQuery = {
    readonly __typename?: "Query"
    readonly me?: {
      readonly __typename?: "User"
      readonly id: string
      readonly defaultAccount: {
        readonly __typename?: "ConsumerAccount"
        readonly id: string
        readonly wallets: ReadonlyArray<{
          readonly __typename?: "BTCWallet"
          readonly id: string
          readonly transactions?: {
            readonly __typename?: "TransactionConnection"
            readonly pageInfo: {
              readonly __typename?: "PageInfo"
              readonly hasNextPage: boolean
              readonly hasPreviousPage: boolean
              readonly startCursor?: string | null
              readonly endCursor?: string | null
            }
            readonly edges?: ReadonlyArray<{
              readonly __typename?: "TransactionEdge"
              readonly cursor: string
              readonly node: {
                readonly __typename: "Transaction"
                readonly id: string
                readonly status: TxStatus
                readonly direction: TxDirection
                readonly memo?: string | null
                readonly createdAt: number
                readonly settlementAmount: number
                readonly settlementFee: number
                readonly settlementPrice: {
                  readonly __typename?: "Price"
                  readonly base: number
                  readonly offset: number
                  readonly currencyUnit: ExchangeCurrencyUnit
                  readonly formattedAmount: string
                }
                readonly initiationVia:
                  | {
                      readonly __typename: "InitiationViaIntraLedger"
                      readonly counterPartyWalletId?: string | null
                      readonly counterPartyUsername?: string | null
                    }
                  | {
                      readonly __typename: "InitiationViaLn"
                      readonly paymentHash: string
                    }
                  | {
                      readonly __typename: "InitiationViaOnChain"
                      readonly address: string
                    }
                readonly settlementVia:
                  | {
                      readonly __typename: "SettlementViaIntraLedger"
                      readonly counterPartyWalletId?: string | null
                      readonly counterPartyUsername?: string | null
                    }
                  | {
                      readonly __typename: "SettlementViaLn"
                      readonly paymentSecret?: string | null
                    }
                  | {
                      readonly __typename: "SettlementViaOnChain"
                      readonly transactionHash: string
                    }
              }
            }> | null
          } | null
        }>
      }
    } | null
  }

  export type UserDefaultWalletIdQueryVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UserDefaultWalletIdQuery = {
    readonly __typename?: "Query"
    readonly userDefaultWalletId: string
  }

  export type UsernameAvailableQueryVariables = Exact<{
    username: Scalars["Username"]
  }>

  export type UsernameAvailableQuery = {
    readonly __typename?: "Query"
    readonly usernameAvailable?: boolean | null
  }

  export type MyUpdatesSubscriptionVariables = Exact<{
    recentTransactions?: InputMaybe<Scalars["Int"]>
  }>

  export type MyUpdatesSubscription = {
    readonly __typename?: "Subscription"
    readonly myUpdates: {
      readonly __typename?: "MyUpdatesPayload"
      readonly errors: ReadonlyArray<
        | { readonly __typename?: "InputError"; readonly message: string }
        | { readonly __typename?: "PaymentError"; readonly message: string }
      >
      readonly me?: {
        readonly __typename?: "User"
        readonly id: string
        readonly language: string
        readonly username?: string | null
        readonly phone: string
        readonly defaultAccount: {
          readonly __typename?: "ConsumerAccount"
          readonly id: string
          readonly defaultWalletId: string
          readonly wallets: ReadonlyArray<{
            readonly __typename?: "BTCWallet"
            readonly id: string
            readonly balance: number
            readonly walletCurrency: WalletCurrency
            readonly transactions?: {
              readonly __typename?: "TransactionConnection"
              readonly pageInfo: {
                readonly __typename?: "PageInfo"
                readonly hasNextPage: boolean
                readonly hasPreviousPage: boolean
                readonly startCursor?: string | null
                readonly endCursor?: string | null
              }
              readonly edges?: ReadonlyArray<{
                readonly __typename?: "TransactionEdge"
                readonly cursor: string
                readonly node: {
                  readonly __typename: "Transaction"
                  readonly id: string
                  readonly status: TxStatus
                  readonly direction: TxDirection
                  readonly memo?: string | null
                  readonly createdAt: number
                  readonly settlementAmount: number
                  readonly settlementFee: number
                  readonly settlementPrice: {
                    readonly __typename?: "Price"
                    readonly base: number
                    readonly offset: number
                    readonly currencyUnit: ExchangeCurrencyUnit
                    readonly formattedAmount: string
                  }
                  readonly initiationVia:
                    | {
                        readonly __typename: "InitiationViaIntraLedger"
                        readonly counterPartyWalletId?: string | null
                        readonly counterPartyUsername?: string | null
                      }
                    | {
                        readonly __typename: "InitiationViaLn"
                        readonly paymentHash: string
                      }
                    | {
                        readonly __typename: "InitiationViaOnChain"
                        readonly address: string
                      }
                  readonly settlementVia:
                    | {
                        readonly __typename: "SettlementViaIntraLedger"
                        readonly counterPartyWalletId?: string | null
                        readonly counterPartyUsername?: string | null
                      }
                    | {
                        readonly __typename: "SettlementViaLn"
                        readonly paymentSecret?: string | null
                      }
                    | {
                        readonly __typename: "SettlementViaOnChain"
                        readonly transactionHash: string
                      }
                }
              }> | null
            } | null
          }>
        }
      } | null
      readonly update?:
        | {
            readonly __typename?: "IntraLedgerUpdate"
            readonly walletId: string
            readonly txNotificationType: TxNotificationType
            readonly amount: number
            readonly usdPerSat: number
            readonly type: "IntraLedgerUpdate"
          }
        | {
            readonly __typename?: "LnUpdate"
            readonly walletId: string
            readonly paymentHash: string
            readonly status: InvoicePaymentStatus
            readonly type: "LnUpdate"
          }
        | {
            readonly __typename?: "OnChainUpdate"
            readonly walletId: string
            readonly txNotificationType: TxNotificationType
            readonly txHash: string
            readonly amount: number
            readonly usdPerSat: number
            readonly type: "OnChainUpdate"
          }
        | {
            readonly __typename?: "Price"
            readonly base: number
            readonly offset: number
            readonly currencyUnit: ExchangeCurrencyUnit
            readonly formattedAmount: string
            readonly type: "Price"
          }
        | null
    }
  }
}