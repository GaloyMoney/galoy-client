import { gql } from "@apollo/client"

const USERNAME_AVAILABLE = gql`
  query usernameAvailable($username: Username!) {
    usernameAvailable(username: $username)
  }
`

export default USERNAME_AVAILABLE
