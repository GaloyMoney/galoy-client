import { gql } from "@apollo/client"

const UPDATE_LANGUAGE = gql`
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

export default UPDATE_LANGUAGE
