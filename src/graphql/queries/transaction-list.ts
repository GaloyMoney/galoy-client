import { gql } from "@apollo/client"
import transactionListFragment from "../fragments/transaction-list-fragment"

const transactionList = gql`
  query transactionList($first: Int, $after: String) {
    me {
      id
      defaultAccount {
        id
        wallets {
          id
          transactions(first: $first, after: $after) {
            ...TransactionList
          }
        }
      }
    }
  }
  ${transactionListFragment}
`

export default transactionList
