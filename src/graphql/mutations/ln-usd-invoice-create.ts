import { gql } from "@apollo/client"

const lnUsdInvoiceCreate = gql`
  mutation LnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {
    lnUsdInvoiceCreate(input: $input) {
      errors {
        message
      }
      invoice {
        paymentRequest
        paymentHash
      }
    }
  }
`

export default lnUsdInvoiceCreate
