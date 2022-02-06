import { gql } from "@apollo/client"
import meFragment from "../fragments/me-fragment"

const main = gql`
  query main($hasToken: Boolean!, $recentTransactions: Int) {
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
      ...Me
    }
  }
  ${meFragment}
`

export default main
