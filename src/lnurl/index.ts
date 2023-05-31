import { requestInvoice, requestPayServiceParams, utils } from "lnurl-pay"
import {
  LnUrlPayServiceArgs,
  LnUrlPayServiceResponse,
  LnUrlRequestInvoiceArgs,
  LnUrlRequestInvoiceResponse,
} from "lnurl-pay/dist/types/types"
import { getDestination, Network, parseBolt11Network } from "../parsing"
import bolt11 from "bolt11"

type isLnurlPaymentSameNodeArgs = {
  lnUrlOrAddress: string
  ourNode: string
  network: Network
}

export const fetchLnurlPaymentParams = async ({
  lnUrlOrAddress,
  onionAllowed = false,
  fetchGet,
}: LnUrlPayServiceArgs): Promise<LnUrlPayServiceResponse> => {
  return requestPayServiceParams({ lnUrlOrAddress, onionAllowed, fetchGet })
}

export const fetchLnurlInvoice = async ({
  lnUrlOrAddress,
  tokens,
  comment,
  fetchGet,
  onionAllowed,
}: LnUrlRequestInvoiceArgs): Promise<LnUrlRequestInvoiceResponse> => {
  return requestInvoice({
    lnUrlOrAddress,
    tokens,
    comment,
    fetchGet,
    onionAllowed,
  })
}

export const isLnurlPaymentSameNode = async ({
  lnUrlOrAddress,
  ourNode,
  network,
}: isLnurlPaymentSameNodeArgs): Promise<boolean> => {
  const { invoice } = await requestInvoice({
    lnUrlOrAddress,
    tokens: utils.toSats(1),
  })
  const decoded = bolt11.decode(invoice, parseBolt11Network(network))
  return ourNode === getDestination(decoded)
}
