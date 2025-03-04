/* eslint-disable max-lines */
import bolt11 from "bolt11"
import { utils } from "lnurl-pay"
import * as bitcoinjs from "bitcoinjs-lib"
import * as ecc from "@bitcoinerlab/secp256k1"

import type { Network } from "./types"
import { convertMerchantQRToLightningAddress } from "./merchants"

bitcoinjs.initEccLib(ecc)

const parseBitcoinJsNetwork = (network: string): bitcoinjs.networks.Network => {
  if (network === "mainnet") {
    return bitcoinjs.networks.bitcoin
  } else if (network === "signet") {
    return bitcoinjs.networks.testnet
  } else if (network === "regtest") {
    return bitcoinjs.networks.regtest
  }
  return bitcoinjs.networks.bitcoin
}
// This is a hack to get around the fact that bolt11 doesn't support signet
export const parseBolt11Network = (network: string): bolt11.Network => {
  if (network === "mainnet") {
    return {
      bech32: "bc",
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      validWitnessVersions: [0, 1],
    }
  } else if (network === "signet") {
    return {
      bech32: "tbs",
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      validWitnessVersions: [0, 1],
    }
  } else if (network === "regtest") {
    return {
      bech32: "bcrt",
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      validWitnessVersions: [0, 1],
    }
  }
  return {
    // default network is bitcoin
    bech32: "bc",
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    validWitnessVersions: [0, 1],
  }
}

export const getDescription = (decoded: bolt11.PaymentRequestObject) => {
  const data = decoded.tags.find((value) => value.tagName === "description")?.data
  if (data) {
    return data as string
  }
}

export const getDestination = (
  decoded: bolt11.PaymentRequestObject,
): string | undefined => decoded.payeeNodeKey

export const getHashFromInvoice = (
  invoice: string,
  network: Network,
): string | undefined => {
  const decoded = bolt11.decode(invoice, parseBolt11Network(network))
  const data = decoded.tags.find((value) => value.tagName === "payment_hash")?.data
  if (data) {
    return data as string
  }
}

export const PaymentType = {
  Lightning: "lightning",
  Intraledger: "intraledger",
  IntraledgerWithFlag: "intraledgerWithFlag",
  Onchain: "onchain",
  Lnurl: "lnurl",
  NullInput: "nullInput",
  Unified: "unified",
  Unknown: "unknown",
} as const

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

export type UnknownPaymentDestination = {
  valid: false
  paymentType: typeof PaymentType.Unknown
}

export type NullInputPaymentDestination = {
  paymentType: typeof PaymentType.NullInput
}

export const InvalidLnurlPaymentDestinationReason = {
  Unknown: "unknown",
}

export type InvalidLnurlPaymentDestinationReason =
  (typeof InvalidLnurlPaymentDestinationReason)[keyof typeof InvalidLnurlPaymentDestinationReason]

export type LnurlPaymentDestination =
  | {
      paymentType: typeof PaymentType.Lnurl
      valid: true
      lnurl: string
    }
  | {
      paymentType: typeof PaymentType.Lnurl
      valid: false
      invalidReason: InvalidLnurlPaymentDestinationReason
    }

export const InvalidLightningDestinationReason = {
  InvoiceExpired: "InvoiceExpired",
  WrongNetwork: "WrongNetwork",
  Unknown: "Unknown",
} as const

export type InvalidLightningDestinationReason =
  (typeof InvalidLightningDestinationReason)[keyof typeof InvalidLightningDestinationReason]

export type LightningPaymentDestination =
  | {
      paymentType: typeof PaymentType.Lightning
      valid: true
      paymentRequest: string
      amount?: number | undefined
      memo?: string | undefined
    }
  | {
      paymentType: typeof PaymentType.Lightning
      valid: false
      invalidReason: InvalidLightningDestinationReason
    }

export const InvalidOnchainDestinationReason = {
  WrongNetwork: "WrongNetwork",
  Unknown: "Unknown",
  InvalidAmount: "InvalidAmount",
} as const

export type InvalidOnchainDestinationReason =
  (typeof InvalidOnchainDestinationReason)[keyof typeof InvalidOnchainDestinationReason]

export type OnchainPaymentDestination =
  | {
      paymentType: typeof PaymentType.Onchain
      valid: true
      address: string
      amount?: number | undefined
      memo?: string | undefined
    }
  | {
      paymentType: typeof PaymentType.Onchain
      valid: false
      invalidReason: InvalidOnchainDestinationReason
    }

export const IntraledgerFlag = {
  Usd: "usd",
} as const

export const InvalidIntraledgerReason = {
  WrongDomain: "WrongDomain",
} as const

export type IntraledgerFlag = (typeof IntraledgerFlag)[keyof typeof IntraledgerFlag]

export type InvalidIntraledgerReason =
  (typeof InvalidIntraledgerReason)[keyof typeof InvalidIntraledgerReason]

export type IntraledgerPaymentDestination =
  | {
      valid: true
      paymentType: typeof PaymentType.Intraledger
      handle: string
    }
  | {
      valid: true
      paymentType: typeof PaymentType.IntraledgerWithFlag
      handle: string
      flag: IntraledgerFlag
    }
  | {
      valid: false
      paymentType: typeof PaymentType.Intraledger
      invalidReason: InvalidIntraledgerReason
      handle: string
    }

export type ParsedPaymentDestination =
  | UnknownPaymentDestination
  | NullInputPaymentDestination
  | LnurlPaymentDestination
  | LightningPaymentDestination
  | OnchainPaymentDestination
  | IntraledgerPaymentDestination

export const lightningInvoiceHasExpired = (
  payReq: bolt11.PaymentRequestObject,
): boolean => {
  return Boolean(payReq?.timeExpireDate && payReq.timeExpireDate < Date.now() / 1000)
}

export const getLightningInvoiceExpiryTime = (
  payReq: bolt11.PaymentRequestObject,
): number => {
  return payReq?.timeExpireDate || NaN
}

export const decodeInvoiceString = (
  invoice: string,
  network: Network,
): bolt11.PaymentRequestObject => {
  return bolt11.decode(invoice, parseBolt11Network(network))
}

const reUsername = /(?!^(1|3|bc1|lnbc1))^[0-9a-z_]{3,50}$/iu

const rePhoneNumber = /^\+\d{7,14}$/iu

// from https://github.com/bitcoin/bips/blob/master/bip-0020.mediawiki#Transfer%20amount/size
const reAmount = /^(([\d.]+)(X(\d+))?|x([\da-f]*)(\.([\da-f]*))?(X([\da-f]+))?)$/iu
const parseAmount = (txt: string): number => {
  const match = txt.match(reAmount)
  if (!match) {
    return NaN
  }
  return Math.round(
    match[5]
      ? (parseInt(match[5], 16) +
          (match[7] ? parseInt(match[7], 16) * Math.pow(16, -match[7].length) : 0)) *
          (match[9] ? Math.pow(16, parseInt(match[9], 16)) : 0x10000)
      : Number(match[2]) * (match[4] ? Math.pow(10, Number(match[4])) : 1e8),
  )
}

type ParsePaymentDestinationArgs = {
  destination: string
  network: Network
  lnAddressDomains: string[]
}

const getLNParam = (data: string): string | null => {
  try {
    return new URL(data).searchParams?.get("lightning")
  } catch {
    return null
  }
}

const getProtocolAndData = (
  destination: string,
): { protocol: string; destinationWithoutProtocol: string } => {
  if (destination.toLocaleLowerCase().startsWith("lightning:")) {
    return {
      protocol: "lightning",
      destinationWithoutProtocol: destination.slice(10),
    }
  }

  if (destination.toLocaleLowerCase().startsWith("bitcoin:")) {
    return {
      protocol: "bitcoin",
      destinationWithoutProtocol: destination.slice(8),
    }
  }

  return {
    protocol: "",
    destinationWithoutProtocol: destination,
  }
}

const getPaymentType = ({
  protocol,
  destinationWithoutProtocol,
  rawDestination,
  network,
}: {
  protocol: string
  destinationWithoutProtocol: string
  rawDestination: string
  network: Network
}): PaymentType => {
  // As far as the client is concerned, lnurl is the same as lightning address
  if (
    utils.parseLnUrl(
      protocol === "lightning" ? destinationWithoutProtocol : rawDestination,
    ) ||
    utils.parseLightningAddress(
      protocol === "lightning" ? destinationWithoutProtocol : rawDestination,
    ) ||
    rawDestination.slice(0, 9) === "lnurlw://" ||
    rawDestination.slice(0, 9) === "lnurlp://" // should already be handled by parseLnUrl
  ) {
    return PaymentType.Lnurl
  }

  if (destinationWithoutProtocol.match(/^ln(bc|tb).{50,}/iu)) {
    return PaymentType.Lightning
  }

  if (
    destinationWithoutProtocol &&
    getLNParam(`lightning:${destinationWithoutProtocol}`)
  ) {
    return PaymentType.Unified
  }

  if (
    protocol === "onchain" ||
    destinationWithoutProtocol.match(/^(1|3|bc1|tb1|bcrt1)/iu)
  ) {
    return PaymentType.Onchain
  }

  const handle = destinationWithoutProtocol.match(/^(http|\/\/)/iu)
    ? destinationWithoutProtocol.split("/")[
        destinationWithoutProtocol.split("/").length - 1
      ]
    : destinationWithoutProtocol

  if (handle?.match(reUsername) || handle?.match(rePhoneNumber)) {
    return PaymentType.Intraledger
  }

  const handleAndFlag = handle?.split("+")
  if (
    handleAndFlag?.length === 2 &&
    handleAndFlag[0].match(reUsername) &&
    Object.values(IntraledgerFlag).includes(
      handleAndFlag[1].toLowerCase() as IntraledgerFlag,
    )
  ) {
    return PaymentType.IntraledgerWithFlag
  }

  const merchantLightningAddress = convertMerchantQRToLightningAddress({
    qrContent: rawDestination,
    network,
  })
  if (merchantLightningAddress) {
    return PaymentType.Lnurl
  }

  return PaymentType.Unknown
}

const getIntraLedgerPayResponse = ({
  destinationWithoutProtocol,
  destination,
  lnAddressDomains,
}: {
  destinationWithoutProtocol: string
  destination: string
  lnAddressDomains: string[]
}): IntraledgerPaymentDestination | UnknownPaymentDestination => {
  const handle = destinationWithoutProtocol.match(/^(http|\/\/)/iu)
    ? destinationWithoutProtocol.split("/")[
        destinationWithoutProtocol.split("/").length - 1
      ]
    : destinationWithoutProtocol

  if (destinationWithoutProtocol.match(/^(http|\/\/)/iu)) {
    const domain = new URL(destination).hostname
    if (!lnAddressDomains.find((lnAddressDomain) => lnAddressDomain === domain)) {
      return {
        valid: false,
        paymentType: PaymentType.Intraledger,
        handle,
        invalidReason: InvalidIntraledgerReason.WrongDomain,
      }
    }
  }

  if (handle?.match(reUsername) || handle?.match(rePhoneNumber)) {
    return {
      valid: true,
      paymentType: PaymentType.Intraledger,
      handle,
    }
  }

  const handleAndFlag = handle?.split("+")
  const flag = handleAndFlag[1]?.toLowerCase()
  if (
    handleAndFlag?.length === 2 &&
    handleAndFlag[0].match(reUsername) &&
    flag === IntraledgerFlag.Usd
  ) {
    return {
      valid: true,
      paymentType: PaymentType.IntraledgerWithFlag,
      handle: handleAndFlag[0],
      flag,
    }
  }

  return {
    valid: false,
    paymentType: PaymentType.Unknown,
  }
}

const getLNURLPayResponse = ({
  lnAddressDomains,
  destination,
  network,
}: {
  lnAddressDomains: string[]
  destination: string
  network: Network
}):
  | LnurlPaymentDestination
  | IntraledgerPaymentDestination
  | UnknownPaymentDestination => {
  // handle internal lightning addresses

  const lnAddress = utils.parseLightningAddress(destination)
  if (lnAddress) {
    const { username, domain } = lnAddress

    if (lnAddressDomains.find((lnAddressDomain) => lnAddressDomain === domain)) {
      return getIntraLedgerPayResponse({
        destinationWithoutProtocol: username,
        lnAddressDomains,
        destination,
      })
    }

    return {
      valid: true,
      paymentType: PaymentType.Lnurl,
      lnurl: `${username}@${domain}`,
    }
  }

  if (
    destination.slice(0, 9) === "lnurlw://" ||
    destination.slice(0, 9) === "lnurlp://"
  ) {
    return {
      valid: true,
      paymentType: PaymentType.Lnurl,
      lnurl: destination,
    }
  }

  const lnurl = utils.parseLnUrl(destination)

  if (lnurl) {
    return {
      valid: true,
      paymentType: PaymentType.Lnurl,
      lnurl,
    }
  }

  const merchantLightningAddress = convertMerchantQRToLightningAddress({
    qrContent: destination,
    network,
  })
  if (merchantLightningAddress) {
    return {
      valid: true,
      paymentType: PaymentType.Lnurl,
      lnurl: merchantLightningAddress,
    }
  }

  return {
    valid: false,
    paymentType: PaymentType.Unknown,
  }
}

const getLightningPayResponse = ({
  destination,
  network,
}: {
  destination: string
  network: Network
}): LightningPaymentDestination => {
  const paymentType = PaymentType.Lightning
  const { destinationWithoutProtocol } = getProtocolAndData(destination)

  const lnProtocol =
    getLNParam(destination)?.toLowerCase() || destinationWithoutProtocol.toLowerCase()

  if (
    (network === "mainnet" &&
      !(lnProtocol.match(/^lnbc/iu) && !lnProtocol.match(/^lnbcrt/iu))) ||
    (network === "signet" && !lnProtocol.match(/^lntb/iu)) ||
    (network === "regtest" && !lnProtocol.match(/^lnbcrt/iu))
  ) {
    return {
      valid: false,
      paymentType,
      invalidReason: InvalidLightningDestinationReason.WrongNetwork,
    }
  }

  let payReq: bolt11.PaymentRequestObject | undefined = undefined
  try {
    payReq = bolt11.decode(lnProtocol, parseBolt11Network(network))
  } catch {
    return {
      valid: false,
      paymentType,
      invalidReason: InvalidLightningDestinationReason.Unknown,
    }
  }

  const amount =
    payReq.satoshis || payReq.millisatoshis
      ? (payReq.satoshis ?? Number(payReq.millisatoshis) / 1000)
      : undefined

  if (lightningInvoiceHasExpired(payReq)) {
    return {
      valid: false,
      paymentType,
      invalidReason: InvalidLightningDestinationReason.InvoiceExpired,
    }
  }

  const memo = getDescription(payReq)
  return {
    valid: true,
    paymentRequest: lnProtocol,
    amount,
    memo,
    paymentType,
  }
}

const getOnChainPayResponse = ({
  destinationWithoutProtocol,
  network,
}: {
  destinationWithoutProtocol: string
  network: Network
}): OnchainPaymentDestination => {
  const paymentType = PaymentType.Onchain
  try {
    const decodedData = new URL(`bitcoin:${destinationWithoutProtocol}`)

    // some apps encode addresses in UPPERCASE
    const path = decodedData?.pathname
    if (!path) {
      throw new Error("No address detected in decoded destination")
    }

    const label: string | null = decodedData?.searchParams.get("label")
    const message: string | null = decodedData?.searchParams.get("message")
    const memo = label || message || undefined
    let amount: number | undefined = undefined
    try {
      const parsedAmount = decodedData?.searchParams.get("amount")
      if (parsedAmount) {
        amount = parseAmount(parsedAmount)
      }
    } catch (err) {
      console.debug("[Parse error: amount]:", err)
      return {
        valid: false,
        paymentType,
        invalidReason: InvalidOnchainDestinationReason.InvalidAmount,
      }
    }

    bitcoinjs.address.toOutputScript(path, parseBitcoinJsNetwork(network))

    return {
      valid: true,
      paymentType,
      address: path,
      amount,
      memo,
    }
  } catch (err) {
    console.debug("[Parse error: onchain]:", err)
    return {
      valid: false,
      invalidReason: InvalidOnchainDestinationReason.Unknown,
      paymentType,
    }
  }
}

const getUnifiedPayResponse = ({
  destination,
  destinationWithoutProtocol,
  network,
}: {
  destination: string
  destinationWithoutProtocol: string
  network: Network
}): OnchainPaymentDestination | LightningPaymentDestination => {
  const lightningPaymentResponse = getLightningPayResponse({
    destination,
    network,
  })

  if (lightningPaymentResponse.valid) {
    return lightningPaymentResponse
  }

  return getOnChainPayResponse({ destinationWithoutProtocol, network })
}

export const parsePaymentDestination = ({
  destination,
  network,
  lnAddressDomains,
}: ParsePaymentDestinationArgs): ParsedPaymentDestination => {
  if (!destination) {
    return { paymentType: PaymentType.NullInput }
  }

  const { protocol, destinationWithoutProtocol } = getProtocolAndData(destination)

  const paymentType = getPaymentType({
    protocol,
    destinationWithoutProtocol,
    rawDestination: destination,
    network,
  })
  switch (paymentType) {
    case PaymentType.Lnurl:
      return getLNURLPayResponse({
        lnAddressDomains,
        destination: protocol === "lightning" ? destinationWithoutProtocol : destination,
        network,
      })
    case PaymentType.Lightning:
      return getLightningPayResponse({ destination, network })
    case PaymentType.Onchain:
      return getOnChainPayResponse({ destinationWithoutProtocol, network })
    case PaymentType.Intraledger:
    case PaymentType.IntraledgerWithFlag:
      return getIntraLedgerPayResponse({
        destinationWithoutProtocol,
        destination,
        lnAddressDomains,
      })
    case PaymentType.Unified:
      return getUnifiedPayResponse({
        destination,
        destinationWithoutProtocol,
        network,
      })
    case PaymentType.Unknown:
      return { paymentType: PaymentType.Unknown, valid: false }
  }

  return { paymentType: PaymentType.Unknown, valid: false }
}
