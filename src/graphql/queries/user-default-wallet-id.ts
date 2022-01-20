import { gql } from "@apollo/client"

const USER_DEFAULT_WALLET_ID = gql`
  query userDefaultWalletId($username: Username!) {
    userDefaultWalletId(username: $username)
  }
`

export default USER_DEFAULT_WALLET_ID
