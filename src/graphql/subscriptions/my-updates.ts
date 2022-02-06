import { gql } from "@apollo/client"
import meFragment from "../fragments/me-fragment"

const myUpdates = gql`
  subscription myUpdates($recentTransactions: Int = 5) {
    myUpdates {
      errors {
        message
      }
      me {
        ...Me
      }
      update {
        type: __typename
        ... on Price {
          base
          offset
          currencyUnit
          formattedAmount
        }
        ... on LnUpdate {
          walletId
          paymentHash
          status
        }
        ... on OnChainUpdate {
          walletId
          txNotificationType
          txHash
          amount
          usdPerSat
        }
        ... on IntraLedgerUpdate {
          walletId
          txNotificationType
          amount
          usdPerSat
        }
      }
    }
  }
  ${meFragment}
`

export default myUpdates
