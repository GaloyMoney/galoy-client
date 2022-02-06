import { gql } from "@apollo/client"
import transactionListFragment from "./transaction-list-fragment"

const meFragment = gql`
  fragment Me on User {
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
  ${transactionListFragment}
`

export default meFragment
