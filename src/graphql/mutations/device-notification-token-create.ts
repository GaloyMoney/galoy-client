import { gql } from "@apollo/client"

const ADD_DEVICE_TOKEN = gql`
  mutation deviceNotificationTokenCreate($deviceToken: String!) {
    deviceNotificationTokenCreate(input: { deviceToken: $deviceToken }) {
      errors {
        message
      }
      success
    }
  }
`

export default ADD_DEVICE_TOKEN
