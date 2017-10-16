import { graphql } from 'react-apollo'
import { object, string } from 'prop-types'
import React, { Component } from 'react'

import { latestBtcPricesQuery } from 'services/queries/prices'
import Spinner from 'components/Spinner'

class ExchangePrice extends Component {
  static displayName = 'ExchangePrice'

  static propTypes = {
    data: object,
    exchange: string,
  }

  render = () => {
    if (this.props.data.loading) {
      return (<div className="exchange-price">{this.props.exchange} <Spinner /></div>)
    }

    const exchange = this.props.exchange
    const latestPrice = this.props.data.allPrices[0].ohlc[4]

    return (
      <div className="exchange-price">{`${exchange} ${latestPrice}`}</div>
    )
  }
}

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
