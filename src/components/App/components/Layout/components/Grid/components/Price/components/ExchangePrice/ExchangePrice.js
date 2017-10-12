import { graphql } from 'react-apollo'
import { object, string } from 'prop-types'
import React, { Component } from 'react'

import { latestBtcPricesQuery } from 'services/queries/prices'

class ExchangePrice extends Component {
  static displayName = 'ExchangePrice'

  render = () => {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    const latestPrice = this.props.data.allPrices[0]
    const exchange = this.props.exchange
    console.log(latestPrice)

    return (
      <div className="exchange-price">{`${exchange} ${latestPrice.price}`}</div>
    )
  }
}

ExchangePrice.propTypes = {
  data: object,
  exchange: string,
}

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
