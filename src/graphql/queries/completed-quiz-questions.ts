import { gql } from "@apollo/client"

const COMPLETED_QUIZ_QUESTIONS = gql`
  query completedQuizQuestions {
    quizQuestions {
      id
      earnAmount
    }
  }
`

export default COMPLETED_QUIZ_QUESTIONS
