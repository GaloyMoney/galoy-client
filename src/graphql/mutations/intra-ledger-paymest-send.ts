import { gql } from "@apollo/client"

const intraLedgerPaymentSend = gql`
  mutation intraLedgerPaymentSend($input: IntraLedgerPaymentSendInput!) {
    intraLedgerPaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`
export default intraLedgerPaymentSend
