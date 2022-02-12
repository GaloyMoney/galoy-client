import { gql } from "@apollo/client"

const userUpdateLanguage = gql`
  mutation userUpdateLanguage($input: UserUpdateLanguageInput!) {
    userUpdateLanguage(input: $input) {
      errors {
        message
      }
      user {
        id
        language
      }
    }
  }
`

export default userUpdateLanguage
