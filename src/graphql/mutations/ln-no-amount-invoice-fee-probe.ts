import { gql } from "@apollo/client"

const LN_NO_AMOUNT_INVOICE_FEE_PROPE = gql`
  mutation lnNoAmountInvoiceFeeProbe($input: LnNoAmountInvoiceFeeProbeInput!) {
    lnNoAmountInvoiceFeeProbe(input: $input) {
      errors {
        message
      }
      amount
    }
  }
`
export default LN_NO_AMOUNT_INVOICE_FEE_PROPE
