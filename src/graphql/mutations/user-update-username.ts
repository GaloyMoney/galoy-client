import { gql } from "@apollo/client"

const userUpdateUsername = gql`
  mutation userUpdateUsername($input: UserUpdateUsernameInput!) {
    userUpdateUsername(input: $input) {
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
