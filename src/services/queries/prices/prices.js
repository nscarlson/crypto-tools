import { gql } from 'react-apollo'

const latestBtcPricesQuery = gql`
  query latestBtcPricesQuery($exchange: String) {
    allPrices(
      last: 1
      orderBy: timestamp_ASC
      filter: {
        exchange: $exchange,
      }
    ) {
      id
      exchange
      price
      timestamp
    }
  }
`

export { latestBtcPricesQuery }
