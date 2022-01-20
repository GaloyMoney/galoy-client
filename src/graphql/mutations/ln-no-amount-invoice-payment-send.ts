import { gql } from "@apollo/client"

const LN_NO_AMOUNT_INVOICE_PAYMENT_SEND = gql`
  mutation lnNoAmountInvoicePaymentSend($input: LnNoAmountInvoicePaymentInput!) {
    lnNoAmountInvoicePaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`

export default LN_NO_AMOUNT_INVOICE_PAYMENT_SEND
