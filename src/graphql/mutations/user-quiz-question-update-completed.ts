import { gql } from "@apollo/client"

const userQuizQuestionUpdateCompleted = gql`
  mutation userQuizQuestionUpdateCompleted(
    $input: UserQuizQuestionUpdateCompletedInput!
  ) {
    userQuizQuestionUpdateCompleted(input: $input) {
      errors {
        message
      }

      userQuizQuestion {
        question {
          id
          earnAmount
        }

        completed
      }
    }
  }
`

export default userQuizQuestionUpdateCompleted
