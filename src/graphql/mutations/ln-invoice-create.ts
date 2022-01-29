import { gql } from "@apollo/client"

const lnInvoiceCreate = gql`
  mutation lnInvoiceCreate($input: LnInvoiceCreateInput!) {
    lnInvoiceCreate(input: $input) {
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
export default lnInvoiceCreate
