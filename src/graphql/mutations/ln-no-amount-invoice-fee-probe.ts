import { gql } from "@apollo/client"

const lnNoAmountInvoiceFeeProbe = gql`
  mutation lnNoAmountInvoiceFeeProbe($input: LnNoAmountInvoiceFeeProbeInput!) {
    lnNoAmountInvoiceFeeProbe(input: $input) {
      errors {
        message
      }
      amount
    }
  }
`
export default lnNoAmountInvoiceFeeProbe
