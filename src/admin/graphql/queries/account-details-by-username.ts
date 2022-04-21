import { gql } from "@apollo/client"

const accountDetailsByUsername = gql`
  query accountDetailsByUsername($username: Username!) {
    accountDetailsByUsername(username: $username) {
      id
      username
      level
      status
      title

      createdAt
    }
  }
`
export default accountDetailsByUsername
