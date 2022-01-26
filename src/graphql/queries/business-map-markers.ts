import { gql } from "@apollo/client"

const QUERY_BUSINESSES = gql`
  query businessMapMarkers {
    businessMapMarkers {
      username
      mapInfo {
        title
        coordinates {
          longitude
          latitude
        }
      }
    }
  }
`

export default QUERY_BUSINESSES
