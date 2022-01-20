import { gql } from "@apollo/client"

const ON_CHAIN_ADDRESS_CURRENT = gql`
  mutation onChainAddressCurrent($input: OnChainAddressCurrentInput!) {
    onChainAddressCurrent(input: $input) {
      errors {
        message
      }
      address
    }
  }
`

export default ON_CHAIN_ADDRESS_CURRENT
