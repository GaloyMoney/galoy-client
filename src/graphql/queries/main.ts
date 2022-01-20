import { gql } from "@apollo/client"

const MAIN = gql`
  query me($hasToken: Boolean!) {
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

export default MAIN
