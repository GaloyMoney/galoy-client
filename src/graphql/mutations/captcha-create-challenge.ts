import { gql } from "@apollo/client"

const CAPTCHA_CREATE_CHALLENGE = gql`
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
export default CAPTCHA_CREATE_CHALLENGE
