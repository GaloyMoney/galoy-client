import { gql } from "@apollo/client"
import transactionListFragment from "../fragments/transaction-list-fragment"

const main = gql`
  query main($hasToken: Boolean!, $recentTransactions: Int = 3) {
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
      language
      username
      phone
      defaultAccount {
        id
        defaultWalletId
        wallets {
          id
          balance
          walletCurrency
          transactions(first: $recentTransactions) {
            ...TransactionList
          }
        }
      }
    }
  }
  ${transactionListFragment}
`

export default main
