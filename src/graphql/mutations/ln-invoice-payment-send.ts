import { gql } from "@apollo/client"

const LN_INVOICE_PAYMENT_SEND = gql`
  mutation lnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
    lnInvoicePaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`

export default LN_INVOICE_PAYMENT_SEND
