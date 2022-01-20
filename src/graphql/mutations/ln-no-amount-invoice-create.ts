import { gql } from "@apollo/client"

const LN_NO_AMOUNT_INVOICE_CREATE = gql`
  mutation lnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {
    lnNoAmountInvoiceCreate(input: $input) {
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
export default LN_NO_AMOUNT_INVOICE_CREATE
