import { gql } from "@apollo/client"

const accountDetailsByUserPhone = gql`
  query accountDetailsByUserPhone($phone: Phone!) {
    accountDetailsByUserPhone(phone: $phone) {
      id
      username
      level
      status
      title

      createdAt
    }
  }
`
export default accountDetailsByUserPhone
