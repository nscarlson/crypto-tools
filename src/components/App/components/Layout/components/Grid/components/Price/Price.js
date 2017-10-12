import React, { Component } from 'react'

import ExchangePrice from './components/ExchangePrice'

class Price extends Component {
  static displayName = 'Price'

  render = () => (
    <div>
      <ExchangePrice exchange="bitstamp" pair="btcusd" />
      <ExchangePrice exchange="kraken" pair="btcusd" />
      <ExchangePrice exchange="poloniex" pair="btcusd" />
      <ExchangePrice exchange="gemini" pair="btcusd" />

      <span className="price-text">{'usd price: '}</span>
      <span className="price-positive">{'1.2%'}</span>
      <div className="arrow-up" />
    </div>
  )
}

export default Price
