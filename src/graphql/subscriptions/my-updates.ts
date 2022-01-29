import { gql } from "@apollo/client"

const myUpdates = gql`
  subscription myUpdates {
    myUpdates {
      errors {
        message
      }
      me {
        id
        defaultAccount {
          id
          wallets {
            id
            walletCurrency
            balance
          }
        }
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
`

export default myUpdates
