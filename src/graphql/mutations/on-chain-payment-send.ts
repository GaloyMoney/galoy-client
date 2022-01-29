import { gql } from "@apollo/client"

const onChainPaymentSend = gql`
  mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {
    onChainPaymentSend(input: $input) {
      errors {
        message
      }
      status
    }
  }
`

export default onChainPaymentSend
