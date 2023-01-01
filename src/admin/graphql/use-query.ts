import { loadFilesSync } from "@graphql-tools/load-files"

const accountDetailsByUserPhone = loadFilesSync(
  "./queries/account-details-by-user-phone.gql",
)[0]
const accountDetailsByUsername = loadFilesSync(
  "./queries/account-details-by-username.gql",
)[0]

export const QUERIES = {
  accountDetailsByUserPhone,
  accountDetailsByUsername,
}
