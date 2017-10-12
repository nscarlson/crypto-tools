import { string } from 'prop-types'

import React from 'react'

const ExchangePrice = ({ exchange, price }) => (
  <div>'{`${exchange} ${price}`}'</div>
)

ExchangePrice.propTypes = {
  exchange: string,
}

ExchangePrice.displayName = 'ExchangePrice'

export default ExchangePrice
