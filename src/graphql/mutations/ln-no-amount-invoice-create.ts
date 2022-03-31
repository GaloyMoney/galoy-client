import { gql } from "@apollo/client"

const lnNoAmountInvoiceCreate = gql`
  mutation lnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {
    lnNoAmountInvoiceCreate(input: $input) {
      errors {
        message
      }
      invoice {
        paymentHash
        paymentRequest
        paymentSecret
      }
    }
  }
`
export default lnNoAmountInvoiceCreate
