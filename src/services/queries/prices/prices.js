import { gql } from 'react-apollo'

const latestBtcPricesQuery = gql`
  query latestBtcPricesQuery {
    allPrices {
      id
      exchange
      price
    }
  }
`

export { latestBtcPricesQuery }
