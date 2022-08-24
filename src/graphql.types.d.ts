declare module "*.graphql" {
  import { DocumentNode } from "graphql"

  const value: DocumentNode // eslint-disable-line init-declarations
  export = value
}
