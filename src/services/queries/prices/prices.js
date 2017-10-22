import { gql } from 'react-apollo'

const latestBtcPricesQuery = gql`
  query latestBtcPricesQuery(
    $exchange: String!
  ) {
    allPrices(
      last: 5
      filter: {
        exchange: {
          name: $exchange
        }
      }
      orderBy: timestamp_ASC
    ) {
      id
      exchange {
        name
      }
      pair
      timestamp
      value
    }
  }
`

export { latestBtcPricesQuery }
