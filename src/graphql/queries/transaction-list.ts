import { gql } from "@apollo/client"
import TRANSACTION_LIST_FRAGMENT from "graphql/fragments/transaction-list-fragment"

const TRANSACTIONS_LIST = gql`
  query transactionsList($first: Int, $after: String) {
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
  ${TRANSACTION_LIST_FRAGMENT}
`

export default TRANSACTIONS_LIST
