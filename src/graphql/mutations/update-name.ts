import { gql } from "@apollo/client"

const UPDATE_NAME = gql`
  mutation userContactUpdateAlias($input: UserContactUpdateAliasInput!) {
    userContactUpdateAlias(input: $input) {
      errors {
        message
      }
    }
  }
`
export default UPDATE_NAME
