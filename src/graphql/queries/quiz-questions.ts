import { gql } from "@apollo/client"

const QUIZ_QUESTIONS = gql`
  query quizQuestions {
    quizQuestions {
      id
      earnAmount
    }
  }
`

export default QUIZ_QUESTIONS
