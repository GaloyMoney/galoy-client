import { gql } from "@apollo/client"

const onChainAddressCurrent = gql`
  mutation onChainAddressCurrent($input: OnChainAddressCurrentInput!) {
    onChainAddressCurrent(input: $input) {
      errors {
        message
      }
      address
    }
  }
`

export default onChainAddressCurrent
