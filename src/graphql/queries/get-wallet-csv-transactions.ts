import { gql } from "@apollo/client"

const getWalletCsvTransactions = gql`
  query getWalletCsvTransactions($defaultWalletId: WalletId!) {
    me {
      id
      defaultAccount {
        id
        csvTransactions(walletIds: [$defaultWalletId])
      }
    }
  }
`

export default getWalletCsvTransactions
