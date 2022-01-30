import { gql } from "@apollo/client"

const lnNoAmountInvoicePaymentSend = gql`
  mutation lnNoAmountInvoicePaymentSend($input: LnNoAmountInvoicePaymentInput!) {
    lnNoAmountInvoicePaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`

export default lnNoAmountInvoicePaymentSend
