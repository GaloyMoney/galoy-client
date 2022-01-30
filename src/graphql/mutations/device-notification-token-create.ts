import { gql } from "@apollo/client"

const deviceNotificationTokenCreate = gql`
  mutation deviceNotificationTokenCreate($deviceToken: String!) {
    deviceNotificationTokenCreate(input: { deviceToken: $deviceToken }) {
      errors {
        message
      }
      success
    }
  }
`

export default deviceNotificationTokenCreate
