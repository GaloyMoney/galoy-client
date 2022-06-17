import { requestInvoice, requestPayServiceParams } from "lnurl-pay"
import { LnUrlPayServiceArgs, LnUrlPayServiceResponse, LnUrlRequestInvoiceArgs, LnUrlRequestInvoiceResponse } from "lnurl-pay/dist/types/types"

export const fetchLnurlPaymentParams = async ({
    lnUrlOrAddress,
    onionAllowed = false,
    fetchGet
}: LnUrlPayServiceArgs)
    : Promise<LnUrlPayServiceResponse> => {
    return requestPayServiceParams({ lnUrlOrAddress, onionAllowed, fetchGet })
}

export const fetchLnurlInvoice = async ({
lnUrlOrAddress,
tokens,
comment,
fetchGet,
onionAllowed
}: LnUrlRequestInvoiceArgs)
: Promise<LnUrlRequestInvoiceResponse> => {
    return requestInvoice({
        lnUrlOrAddress,
        tokens,
        comment,
        fetchGet,
        onionAllowed
    })
}
