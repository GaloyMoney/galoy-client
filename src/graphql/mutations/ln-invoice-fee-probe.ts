import { gql } from "@apollo/client"

const lnInvoiceFeeProbe = gql`
  mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {
    lnInvoiceFeeProbe(input: $input) {
      errors {
        message
      }
      amount
    }
  }
`
export default lnInvoiceFeeProbe
