import { gql } from 'react-apollo'

const latestBtcPricesQuery = gql`
  query latestBtcPricesQuery($exchange: String!, $pair: String!) {
    allPrices(
      last: 1
      orderBy: timestamp_ASC
      filter: {
        pair: $pair
      }
    ) {
      id
      exchange(
        filter: {
          name: $exchange
        }
      ) {
        name
      }
      ohlc
      timestamp
    }
  }
`

export { latestBtcPricesQuery }
