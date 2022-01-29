import { gql } from "@apollo/client"

const captchaRequestAuthCode = gql`
  mutation captchaRequestAuthCode($input: CaptchaRequestAuthCodeInput!) {
    captchaRequestAuthCode(input: $input) {
      errors {
        message
      }
      success
    }
  }
`
export default captchaRequestAuthCode
