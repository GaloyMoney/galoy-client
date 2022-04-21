import { gql } from "@apollo/client"

const accountUpdateLevel = gql`
  mutation accountUpdateLevel($input: AccountUpdateLevelInput!) {
    accountUpdateLevel(input: $input) {
      accountDetails {
        id
        username
        level
        status
        title

        createdAt
      }
    }
  }
`
export default accountUpdateLevel
