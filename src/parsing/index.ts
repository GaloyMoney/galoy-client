import bolt11 from "bolt11"
import url from "url"
import { networks, address } from "bitcoinjs-lib"
import { utils } from "lnurl-pay"

const parseBitcoinJsNetwork = (network: string): networks.Network => {
  if (network === "mainnet") {
    return networks.bitcoin
  } else if (network === "signet") {
    return networks.testnet
  } else if (network === "regtest") {
    return networks.regtest
  }
  return networks.bitcoin
}
// This is a hack to get around the fact that bolt11 doesn't support signet
const parseBolt11Network = (network: string): bolt11.Network => {
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
  network?: bolt11.Network,
): string | undefined => {
  const decoded = bolt11.decode(invoice, network)
  const data = decoded.tags.find((value) => value.tagName === "payment_hash")?.data
  if (data) {
    return data as string
  }
}

export type Network = "mainnet" | "signet" | "regtest"
export type PaymentType = "lightning" | "onchain" | "intraledger" | "lnurl"
export interface ValidPaymentResponse {
  valid: boolean
  errorMessage?: string | undefined

  paymentRequest?: string | undefined // for lightning
  address?: string | undefined // for bitcoin
  lnurl?: string | undefined // for lnurl
  handle?: string | undefined // for intraledger

  amount?: number | undefined
  memo?: string | undefined
  paymentType?: PaymentType
  sameNode?: boolean | undefined
}

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
  network?: bolt11.Network,
): bolt11.PaymentRequestObject => {
  return bolt11.decode(invoice, network)
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
}

const inputDataToObject = (data: string): any => {
  return url.parse(data, true)
}

const getLNParam = (data: string): string | undefined => {
  return inputDataToObject(data)?.query?.lightning
}

const getProtocolAndData = (
  destination: string,
): { protocol: string; destinationText: string } => {
  // input might start with 'lightning:', 'bitcoin:'
  const split = destination.split(":")
  const protocol = split[0].toLocaleLowerCase()
  const destinationText = split[1] ?? split[0]
  return { protocol, destinationText }
}

const getPaymentType = ({
  protocol,
  destinationText,
}: {
  protocol: string
  destinationText: string
}): PaymentType => {
  // As far as the client is concerned, lnurl is the same as lightning address
  if (utils.isLnurl(destinationText) || utils.isLightningAddress(destinationText)) {
    return "lnurl"
  }
  if (
    protocol === "lightning" ||
    destinationText.match(/^ln(bc|tb).{50,}/iu) ||
    (destinationText && getLNParam(destinationText) !== undefined)
  ) {
    return "lightning"
  }
  if (protocol === "onchain" || destinationText.match(/^(1|3|bc1|tb1|bcrt1)/iu)) {
    return "onchain"
  }
  return "intraledger"
}

const getLNURLPayResponse = ({
  destinationText,
}: {
  destinationText: string
}): ValidPaymentResponse => {
  return {
    valid: true,
    paymentType: "lnurl",
    lnurl: destinationText,
  }
}

const getLightningPayResponse = ({
  destination,
  network,
}: {
  destination: string
  network: Network
}): ValidPaymentResponse => {
  const paymentType = "lightning"
  const { protocol, destinationText } = getProtocolAndData(destination)
  const lnProtocol =
    getLNParam(destination) ??
    (protocol.toLowerCase() === "lightning" ? destinationText : protocol).toLowerCase()

  if (
    (network === "mainnet" &&
      !(lnProtocol.match(/^lnbc/iu) && !lnProtocol.match(/^lnbcrt/iu))) ||
    (network === "signet" && !lnProtocol.match(/^lntb/iu)) ||
    (network === "regtest" && !lnProtocol.match(/^lnbcrt/iu))
  ) {
    return {
      valid: false,
      paymentType,
      paymentRequest: destinationText,
      errorMessage: `Invalid lightning invoice for ${network} network`,
    }
  }

  let payReq: bolt11.PaymentRequestObject | undefined = undefined
  try {
    payReq = bolt11.decode(lnProtocol, parseBolt11Network(network))
  } catch (err) {
    return {
      valid: false,
      paymentType,
      paymentRequest: destinationText,
      errorMessage: err instanceof Error ? err.message : "Invalid lightning invoice",
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
      amount,
      paymentRequest: destinationText,
      errorMessage: "invoice has expired",
    }
  }

  const memo = getDescription(payReq)
  return {
    valid: true,
    paymentRequest: destinationText,
    amount,
    memo,
    paymentType,
  }
}

const getOnChainPayResponse = ({
  destinationText,
  network,
}: {
  destinationText: string
  network: Network
}): ValidPaymentResponse => {
  try {
    const decodedData = inputDataToObject(destinationText)

    // some apps encode addresses in UPPERCASE
    const path = decodedData?.pathname
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
        address: path,
        errorMessage: "Invalid amount in payment destination",
        memo,
      }
    }

    address.toOutputScript(path, parseBitcoinJsNetwork(network))

    return {
      valid: true,
      paymentType: "onchain",
      address: path,
      amount,
      memo,
    }
  } catch (err) {
    console.debug("[Parse error: onchain]:", err)
    return {
      valid: false,
      errorMessage: "Invalid bitcoin address",
    }
  }
}

const getIntraLedgerPayResponse = ({
  protocol,
  destinationText,
}: {
  protocol: string
  destinationText: string
}): ValidPaymentResponse => {
  const handle = protocol.match(/^(http|\/\/)/iu)
    ? destinationText.split("/")[destinationText.split("/").length - 1]
    : destinationText

  if (handle?.match(/(?!^(1|3|bc1|lnbc1))^[0-9a-z_]{3,50}$/iu)) {
    return {
      valid: true,
      paymentType: "intraledger",
      handle,
    }
  }

  return {
    valid: false,
    errorMessage: "Invalid payment destination",
  }
}

export const parsePaymentDestination = ({
  destination,
  network,
}: ParsePaymentDestinationArgs): ValidPaymentResponse => {
  if (!destination) {
    return { valid: false }
  }

  const { protocol, destinationText } = getProtocolAndData(destination)

  const paymentType = getPaymentType({ protocol, destinationText })

  switch (paymentType) {
    case "lnurl":
      return getLNURLPayResponse({ destinationText })
    case "lightning":
      return getLightningPayResponse({ destination, network })
    case "onchain":
      return getOnChainPayResponse({ destinationText, network })
    case "intraledger":
      return getIntraLedgerPayResponse({ protocol, destinationText })
  }
}
