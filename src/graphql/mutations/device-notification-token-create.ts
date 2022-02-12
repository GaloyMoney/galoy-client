import { gql } from "@apollo/client"

const deviceNotificationTokenCreate = gql`
  mutation deviceNotificationTokenCreate($input: DeviceNotificationTokenCreateInput!) {
    deviceNotificationTokenCreate(input: $input) {
      errors {
        message
      }
      success
    }
  }
`

export default deviceNotificationTokenCreate
