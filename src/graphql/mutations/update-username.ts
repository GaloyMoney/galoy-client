import { gql } from "@apollo/client"

const UPDATE_USERNAME = gql`
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

export default UPDATE_USERNAME
