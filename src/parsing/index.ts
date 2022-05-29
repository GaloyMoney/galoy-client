import bolt11 from "bolt11"
import url from "url"
import { networks, address } from "bitcoinjs-lib"

export const getDescription = (decoded: bolt11.PaymentRequestObject) => {
  const data = decoded.tags.find((value) => value.tagName === "description")?.data
  if (data) {
    return data as string
  }
}

export const getDestination = (
  decoded: bolt11.PaymentRequestObject,
): string | undefined => decoded.payeeNodeKey

export const getHashFromInvoice = (invoice: string): string | undefined => {
  const decoded = bolt11.decode(invoice)
  const data = decoded.tags.find((value) => value.tagName === "payment_hash")?.data
  if (data) {
    return data as string
  }
}

export type Network = "mainnet" | "testnet" | "regtest"
export type PaymentType = "lightning" | "onchain" | "intraledger" | "lnurl"
export interface ValidPaymentReponse {
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
  pubKey: string
}

export const parsePaymentDestination = ({
  destination,
  network,
  pubKey,
}: ParsePaymentDestinationArgs): ValidPaymentReponse => {
  if (!destination) {
    return { valid: false }
  }

  const { protocol, destinationText } = getProtocolAndData(destination)

  const paymentType = getPaymentType({ protocol, destinationText })

  switch (paymentType) {
    case "lnurl":
      return getLNURLPayResponse({ destinationText })
    case "lightning":
      return getLightningPayResponse({ destination, network, pubKey })
    case "onchain":
      return getOnChainPayResponse({ destinationText, network })
    case "intraledger":
      return getIntraLedgerPayResponse({ protocol, destinationText })
  }
}

const getPaymentType = ({
  protocol,
  destinationText,
}: {
  protocol: string
  destinationText: string
}): PaymentType => {
  if (destinationText.match(/^lnurl/iu)) {
    return "lnurl"
  }
  if (
    protocol === "lightning" ||
    destinationText.match(/^ln(bc|tb).{50,}/iu) ||
    (destinationText && getLNParam(destinationText) != null)
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
}): ValidPaymentReponse => {
  return {
    valid: true,
    paymentType: "lnurl",
    lnurl: destinationText,
  }
}

const getLightningPayResponse = ({
  destination,
  network,
  pubKey,
}: {
  destination: string
  network: Network
  pubKey: string
}): ValidPaymentReponse => {
  const paymentType = "lightning"
  const { protocol, destinationText } = getProtocolAndData(destination)
  const lnProtocol = getLNParam(destination) ?? protocol
  if (
    (network === "mainnet" &&
      !(lnProtocol.match(/^lnbc/iu) && !lnProtocol.match(/^lnbcrt/iu))) ||
    (network === "testnet" && !lnProtocol.match(/^lntb/iu)) ||
    (network === "regtest" && !lnProtocol.match(/^lnbcrt/iu))
  ) {
    return {
      valid: false,
      paymentType,
      paymentRequest: destinationText,
      errorMessage: `Invalid lightning invoice for ${network} network`,
    }
  }

  const dataToDecode = getDataToDecode(destinationText)

  let payReq: bolt11.PaymentRequestObject | undefined = undefined
  try {
    payReq = bolt11.decode(dataToDecode)
  } catch (err) {
    return {
      valid: false,
      paymentType,
      paymentRequest: destinationText,
      errorMessage: err instanceof Error ? err.message : "Invalid lightning invoice",
    }
  }

  const sameNode = pubKey === getDestination(payReq)

  const amount =
    payReq.satoshis || payReq.millisatoshis
      ? payReq.satoshis ?? Number(payReq.millisatoshis) / 1000
      : undefined

  if (lightningInvoiceHasExpired(payReq)) {
    return {
      valid: false,
      paymentType,
      sameNode,
      amount,
      paymentRequest: destinationText,
      errorMessage: "invoice has expired",
    }
  }

  const memo = getDescription(payReq)
  return {
    valid: true,
    paymentRequest: destinationText,
    sameNode,
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
}): ValidPaymentReponse => {
  try {
    const decodedData = inputDataToObject(destinationText)

    // some apps encode addresses in UPPERCASE
    const path = decodedData?.pathname
    if (!path) {
      throw new Error("No address detected in decoded destination")
    }

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
      }
    }

    // will throw if address is not valid
    address.toOutputScript(path, networks[network === "mainnet" ? "bitcoin" : network])
    return {
      valid: true,
      paymentType: "onchain",
      address: path,
      amount,
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
}): ValidPaymentReponse => {
  const handle = protocol.match(/^(http|\/\/)/iu)
    ? destinationText.split("/").at(-1)
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

const getProtocolAndData = (
  destination: string,
): { protocol: string; destinationText: string } => {
  // input might start with 'lightning:', 'bitcoin:'
  const split = destination.split(":")
  const protocol = split[0].toLocaleLowerCase()
  const destinationText = split[1] ?? split[0]
  return { protocol, destinationText }
}

const inputDataToObject = (data: string): any => {
  return url.parse(data, true)
}

const getLNParam = (data: string): string | undefined => {
  return inputDataToObject(data)?.query?.lightning
}

const getDataToDecode = (inputData: string): string => {
  const lnParam = getLNParam(inputData)
  if (lnParam != null) {
    return lnParam
  }
  const { protocol, destinationText } = getProtocolAndData(inputData)
  // some apps encode lightning invoices in UPPERCASE
  return (
    protocol.toLowerCase() === "lightning" ? destinationText : protocol
  ).toLowerCase()
}
