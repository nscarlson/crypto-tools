import { gql } from 'react-apollo'

const btcPrices = gql`
  query getBtcPrices {
    allPrices {
      id
      price
    }
  }
`

export { btcPrices }
