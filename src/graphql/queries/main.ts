import { gql } from "@apollo/client"

const main = gql`
  query main($hasToken: Boolean!) {
    globals {
      nodesIds
    }
    btcPrice {
      base
      offset
      currencyUnit
      formattedAmount
    }
    me @include(if: $hasToken) {
      id
      username
      language
      defaultAccount {
        id
        wallets {
          id
          balance
        }
      }
    }
  }
`

export default main
