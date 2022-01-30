import { gql } from "@apollo/client"

const userUpdateUsername = gql`
  mutation updateUsername($username: Username!) {
    userUpdateUsername(input: { username: $username }) {
      errors {
        message
      }
      user {
        id
        username
      }
    }
  }
`

export default userUpdateUsername
