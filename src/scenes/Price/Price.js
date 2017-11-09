import React, { Component } from 'react'

import ExchangePrice from './components/ExchangePrice'

class Price extends Component {
  static displayName = 'Price'

  render = () => (
    <div className="price-container">
      <ExchangePrice exchange="bitstamp" name="Bitstamp" pair="btcusd" />
      <ExchangePrice exchange="kraken" name="Kraken" pair="btcusd" />
      <ExchangePrice exchange="gemini" name="Gemini" pair="btcusd" />
    </div>
  )
}

export default Price
