import React, { Component } from 'react'

import ExchangePrice from './components/ExchangePrice'

class Price extends Component {
  static displayName = 'Price'

  render = () => (
    <div>
      <ExchangePrice exchange="poloniex" />

      <span className="price-text">{'usd price: '}</span>
      <span className="price-positive">{'1.2%'}</span>
      <div className="arrow-up" />
    </div>
  )
}

Price.displayName = 'Price'

export default Price
