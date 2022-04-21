import { gql } from "@apollo/client"

const accountUpdateStatus = gql`
  mutation accountUpdateStatus($input: AccountUpdateStatusInput!) {
    accountUpdateStatus(input: $input) {
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
export default accountUpdateStatus
