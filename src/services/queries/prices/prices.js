import { gql } from 'react-apollo'

const allPrices = gql`
  query allPrices (
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

export { allPrices }
