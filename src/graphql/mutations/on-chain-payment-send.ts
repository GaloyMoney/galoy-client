import { gql } from "@apollo/client"

const ON_CHAIN_PAYMENT_SEND = gql`
  mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {
    onChainPaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`

export default ON_CHAIN_PAYMENT_SEND
