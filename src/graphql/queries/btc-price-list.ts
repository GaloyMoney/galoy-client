import { gql } from "@apollo/client"

const BTC_PRICE_LIST = gql`
  query btcPriceList($range: PriceGraphRange!) {
    btcPriceList(range: $range) {
      timestamp
      price {
        base
        offset
        currencyUnit
        formattedAmount
      }
    }
  }
`
export default BTC_PRICE_LIST
