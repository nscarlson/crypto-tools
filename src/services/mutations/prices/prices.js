import { gql } from 'react-apollo'

const createPrice = gql`
  mutation createPrice(
    $exchangeId: String!
    $price: Float!
    $symbol: String!
    $timestamp: Int!
  ) {
    createPrice (
      exchangeId: $exchangeId,
      price: $price,
      symbol: $symbol,
      timestamp: $timestamp
    ) {
      id
      exchange {
        name
      }
      symbol
      price
      timestamp
    }
  }
`
export { createPrice }
