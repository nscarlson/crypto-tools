import { graphql } from 'react-apollo'

import { btcPrices } from 'services/queries/prices'

console.log(btcPrices)

import Price from './Price'

const PriceContainer = graphql(btcPrices)(Price)

PriceContainer.displayName = 'PriceContainer'

export default PriceContainer
