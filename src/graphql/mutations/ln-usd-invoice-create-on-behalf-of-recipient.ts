import { gql } from "@apollo/client"

const lnUsdInvoiceCreateOnBehalfOfRecipient = gql`
  mutation lnUsdInvoiceCreateOnBehalfOfRecipient(
    $input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!
  ) {
    lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {
      errors {
        message
      }
      invoice {
        paymentHash
        paymentRequest
        paymentSecret
        satoshis
      }
    }
  }
`

export default lnUsdInvoiceCreateOnBehalfOfRecipient
