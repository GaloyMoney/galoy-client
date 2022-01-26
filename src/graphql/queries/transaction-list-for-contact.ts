import { gql } from "@apollo/client"
import TRANSACTION_LIST_FRAGMENT from "graphql/fragments/transaction-list-fragment"

const TRANSACTIONS_LIST_FOR_CONTACT = gql`
  query transactionsListForContact($username: Username!, $first: Int, $after: String) {
    me {
      id
      contactByUsername(username: $username) {
        transactions(first: $first, after: $after) {
          ...TransactionList
        }
      }
    }
  }
  ${TRANSACTION_LIST_FRAGMENT}
`

export default TRANSACTIONS_LIST_FOR_CONTACT
