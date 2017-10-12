import React, { Component } from 'react'

import ExchangePrice from './components/ExchangePrice'

class Price extends Component {
  static displayName = 'Price'

  render = () => (
    <div>
      <ExchangePrice exchange="poloniex" />
      <ExchangePrice exchange="gemini" />
      <ExchangePrice exchange="bitstamp" />

      <span className="price-text">{'usd price: '}</span>
      <span className="price-positive">{'1.2%'}</span>
      <div className="arrow-up" />
    </div>
  )
}

export default Price
