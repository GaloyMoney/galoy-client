import { gql } from "@apollo/client"

const INTRA_LEDGER_PAYMENT_SEND = gql`
  mutation intraLedgerPaymentSend($input: IntraLedgerPaymentSendInput!) {
    intraLedgerPaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`
export default INTRA_LEDGER_PAYMENT_SEND
