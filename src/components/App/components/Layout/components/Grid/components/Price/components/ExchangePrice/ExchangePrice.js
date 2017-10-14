import { graphql } from 'react-apollo'
import { object, string } from 'prop-types'
import React, { Component } from 'react'

import { latestBtcPricesQuery } from 'services/queries/prices'

class ExchangePrice extends Component {
  static displayName = 'ExchangePrice'

  render = () => {
    if (this.props.data.loading) {
      return (<div>{this.props.exchange} ...</div>)
    }

    const latestPrice = this.props.data.allPrices[0].exchange ? this.props.data.allPrices[0] : null
    const latestClosingPrice = latestPrice && latestPrice.ohlc ? latestPrice.ohlc[0] : '...'
    const exchange = this.props.exchange

    return (
      <div className="exchange-price">{`${exchange} ${latestClosingPrice}`}</div>
    )
  }
}

ExchangePrice.propTypes = {
  data: object,
  exchange: string,
}

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange, pair }) => ({ variables: { exchange, pair } }),
})(ExchangePrice)
