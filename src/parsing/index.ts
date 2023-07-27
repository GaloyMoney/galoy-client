/* eslint-disable max-lines */
import bolt11 from "bolt11"
import url from "url"
import * as bitcoinjs from "bitcoinjs-lib"
import { utils } from "lnurl-pay"

export type Network = "mainnet" | "signet" | "regtest"

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
  Onchain: "onchain",
  Lnurl: "lnurl",
  NullInput: "nullInput",
  Unified: "unified",
  Unknown: "unknown",
} as const

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

export type UnknownPaymentDestination = {
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

export const InvalidIntraledgerReason = {
  WrongDomain: "WrongDomain",
} as const

export type InvalidIntraledgerReason =
  (typeof InvalidIntraledgerReason)[keyof typeof InvalidIntraledgerReason]

export type IntraledgerPaymentDestination =
  | {
      valid: true
      paymentType: typeof PaymentType.Intraledger
      handle: string
    }
  | {
      paymentType: typeof PaymentType.Intraledger
      valid: false
      invalidReason: InvalidIntraledgerReason
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

const inputDataToObject = (data: string): any => {
  return url.parse(data, true)
}

const getLNParam = (data: string): string | undefined => {
  return inputDataToObject(data)?.query?.lightning
}

const getProtocolAndData = (
  destination: string,
): { protocol: string; destinationWithoutProtocol: string } => {
  // input might start with 'lightning:', 'bitcoin:'
  const split = destination.split(":")
  const protocol = split[1] ? split[0].toLocaleLowerCase() : ""
  const destinationWithoutProtocol = split[1] ?? split[0]
  return { protocol, destinationWithoutProtocol }
}

const getPaymentType = ({
  protocol,
  destinationWithoutProtocol,
  rawDestination,
}: {
  protocol: string
  destinationWithoutProtocol: string
  rawDestination: string
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

  if (destinationWithoutProtocol && getLNParam(destinationWithoutProtocol)) {
    return PaymentType.Unified
  }

  if (
    protocol === "onchain" ||
    destinationWithoutProtocol.match(/^(1|3|bc1|tb1|bcrt1)/iu)
  ) {
    return PaymentType.Onchain
  }

  const handle = protocol.match(/^(http|\/\/)/iu)
    ? destinationWithoutProtocol.split("/")[
        destinationWithoutProtocol.split("/").length - 1
      ]
    : destinationWithoutProtocol

  if (handle?.match(/(?!^(1|3|bc1|lnbc1))^[0-9a-z_]{3,50}$/iu)) {
    return PaymentType.Intraledger
  }

  return PaymentType.Unknown
}

const getIntraLedgerPayResponse = ({
  protocol,
  destinationWithoutProtocol,
}: {
  protocol: string
  destinationWithoutProtocol: string
}): IntraledgerPaymentDestination | UnknownPaymentDestination => {
  const paymentType = PaymentType.Intraledger

  const handle = protocol.match(/^(http|\/\/)/iu)
    ? destinationWithoutProtocol.split("/")[
        destinationWithoutProtocol.split("/").length - 1
      ]
    : destinationWithoutProtocol

  if (handle?.match(/(?!^(1|3|bc1|lnbc1))^[0-9a-z_]{3,50}$/iu)) {
    return {
      valid: true,
      paymentType,
      handle,
    }
  }

  return {
    paymentType: PaymentType.Unknown,
  }
}

const getLNURLPayResponse = ({
  lnAddressDomains,
  destination,
}: {
  lnAddressDomains: string[]
  destination: string
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
        protocol: "",
        destinationWithoutProtocol: username,
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
  } catch (err) {
    return {
      valid: false,
      paymentType,
      invalidReason: InvalidLightningDestinationReason.Unknown,
    }
  }

  const amount =
    payReq.satoshis || payReq.millisatoshis
      ? payReq.satoshis ?? Number(payReq.millisatoshis) / 1000
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
    const decodedData = inputDataToObject(destinationWithoutProtocol)

    // some apps encode addresses in UPPERCASE
    const path = decodedData?.pathname as string
    if (!path) {
      throw new Error("No address detected in decoded destination")
    }

    const label: string | undefined = decodedData?.query?.label
    const message: string | undefined = decodedData?.query?.message
    const memo = label || message || undefined
    let amount: number | undefined = undefined
    try {
      amount = decodedData?.query?.amount
        ? parseAmount(decodedData.query.amount as string)
        : undefined
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
  })

  switch (paymentType) {
    case PaymentType.Lnurl:
      return getLNURLPayResponse({
        lnAddressDomains,
        destination: protocol === "lightning" ? destinationWithoutProtocol : destination,
      })
    case PaymentType.Lightning:
      return getLightningPayResponse({ destination, network })
    case PaymentType.Onchain:
      return getOnChainPayResponse({ destinationWithoutProtocol, network })
    case PaymentType.Intraledger:
      return getIntraLedgerPayResponse({ protocol, destinationWithoutProtocol })
    case PaymentType.Unified:
      return getUnifiedPayResponse({
        destination,
        destinationWithoutProtocol,
        network,
      })
    case PaymentType.Unknown:
      return { paymentType: PaymentType.Unknown }
  }

  return { paymentType: PaymentType.Unknown }
}
