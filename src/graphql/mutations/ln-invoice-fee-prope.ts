import { gql } from "@apollo/client"

const LN_INVOICE_FEE_PROPE = gql`
  mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {
    lnInvoiceFeeProbe(input: $input) {
      errors {
        message
      }
      amount
    }
  }
`
export default LN_INVOICE_FEE_PROPE
