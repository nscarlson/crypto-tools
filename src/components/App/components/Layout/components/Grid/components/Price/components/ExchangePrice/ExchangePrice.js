import { object, string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { latestBtcPricesQuery } from 'services/queries/prices'
import Spinner from 'components/Spinner'

class ExchangePrice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movement: 'up',
    }
  }

  static displayName = 'ExchangePrice'

  static propTypes = {
    data: object,
    exchange: string,
    movement: string,
    name: string,
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.exchange.price === this.props.exchange.price) {
      this.setState({
        movement: '',
      })
    } else {
      this.setState({
        movement: (nextProps.exchange.price > this.props.exchange.price ? 'up' : 'down'),
      })
    }
    setTimeout(this.resetMovement, 2500)
  }

  render = () => {
    if (this.props.data.loading) {
      return (
        <div className="exchange-price">
          <h1>{this.props.name}</h1>
          <Spinner />
        </div>
      )
    }

    const latestPrice = this.props.data.allPrices[0].ohlc[4]

    return (
      <div className="exchange-price">
        <h1>{this.props.name}</h1>
        <span className={`live-price ${this.state.movement}`}>
          {latestPrice}
        </span>
      </div>
    )
  }

  resetMovement = () => {
    this.setState({
      movement: '',
    })
  }
}

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
