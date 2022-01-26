import { gql } from "@apollo/client"

const CONTACTS = gql`
  query contacts {
    me {
      id
      contacts {
        username
        alias
        transactionsCount
      }
    }
  }
`

export default CONTACTS
