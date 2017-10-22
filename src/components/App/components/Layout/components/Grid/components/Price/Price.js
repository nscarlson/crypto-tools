import React, { Component } from 'react'

import ExchangePrice from './components/ExchangePrice'

class Price extends Component {
  static displayName = 'Price'

  render = () => (
    <div className="price-container">
      <ExchangePrice exchange="bitstamp" movement="up" name="Bitstamp" pair="btcusd" />
      <ExchangePrice exchange="kraken" movement="down" name="Kraken" pair="btcusd" />
      <ExchangePrice exchange="gemini" movement="up" name="Gemini" pair="btcusd" />
    </div>
  )
}

export default Price
