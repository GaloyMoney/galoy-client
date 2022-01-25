import { gql } from "@apollo/client"

const GET_WALLET_CSV_TRANSACTIONS = gql`
  query getWalletCSVTransactions($defaultWalletId: WalletId!) {
    me {
      id
      defaultAccount {
        id
        csvTransactions(walletIds: [$defaultWalletId])
      }
    }
  }
`

export default GET_WALLET_CSV_TRANSACTIONS
