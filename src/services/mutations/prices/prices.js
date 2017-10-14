import { gql } from 'react-apollo'

const createPrice = gql`
  mutation createPrice(
    $exchange: String!
    $price: Float!
    $symbol: String!
    $timestamp: Int!
  ) {
    createPrice (
      exchange: $exchange,
      price: $price,
      symbol: $symbol,
      timestamp: $timestamp
    ) {
      id
      exchange
      symbol
      price
      timestamp
    }
  }
`
export { createPrice }
