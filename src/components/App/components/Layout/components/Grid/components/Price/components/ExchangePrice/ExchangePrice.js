import { graphql } from 'react-apollo'
import { string, number } from 'prop-types'
import React from 'react'

import { latestBtcPricesQuery } from 'services/queries/prices'

const ExchangePrice = ({ exchange, price }) => {
  if (exchange.loading) {
    return (<div>Loading</div>)
  }
  return (
    <div className="exchange-price">{`${exchange} ${price}`}</div>
  )
}

ExchangePrice.propTypes = {
  exchange: string,
  price: number,
}

ExchangePrice.displayName = 'ExchangePrice'

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
