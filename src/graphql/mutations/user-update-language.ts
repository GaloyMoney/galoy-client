import { gql } from "@apollo/client"

const userUpdateLanguage = gql`
  mutation updateLanguage($language: Language!) {
    userUpdateLanguage(input: { language: $language }) {
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
