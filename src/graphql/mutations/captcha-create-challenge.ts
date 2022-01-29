import { gql } from "@apollo/client"

const captchaCreateChallenge = gql`
  mutation captchaCreateChallenge {
    captchaCreateChallenge {
      errors {
        message
      }
      result {
        id
        challengeCode
        newCaptcha
        failbackMode
      }
    }
  }
`
export default captchaCreateChallenge
