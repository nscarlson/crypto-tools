import { graphql } from 'react-apollo'

import { latestBtcPricesQuery } from 'services/queries/prices'
import Price from './Price'

const PriceContainer = graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(Price)

PriceContainer.displayName = 'PriceContainer'

export default PriceContainer
