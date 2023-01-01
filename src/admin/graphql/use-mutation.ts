import { loadFilesSync } from "@graphql-tools/load-files"

const accountUpdateStatus = loadFilesSync("./mutations/account-update-status.gql")[0]
const accountUpdateLevel = loadFilesSync("./mutations/account-update-level.gql")[0]

export const MUTATIONS = {
  accountUpdateStatus,
  accountUpdateLevel,
}
