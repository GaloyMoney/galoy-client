import { gql } from "@apollo/client"

const USER_QUIZ_QUESTION_UPDATE_COMPLETED = gql`
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

export default USER_QUIZ_QUESTION_UPDATE_COMPLETED
