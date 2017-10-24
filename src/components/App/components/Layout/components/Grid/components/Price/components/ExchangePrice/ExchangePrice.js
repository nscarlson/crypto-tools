import { object, string } from 'prop-types'
import { graphql } from 'react-apollo'
import React, { Component } from 'react'

import { allPrices } from 'services/queries/prices'
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
    name: string,
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.data.allPrices !== this.props.data.allPrices && this.endRef) {
      this.endRef.scrollIntoView()
    }
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
    const { data: { loading, error } } = this.props

    if (loading) {
      return (
        <div className="exchange-price">
          <h1>{this.props.name}</h1>
          <Spinner />
        </div>
      )
    }

    if (error) {
      return (<div>ERROR</div>)
    }

    const latestPrice = this.props.data.allPrices[0].value

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

export default graphql(allPrices, {
  options: ({ exchange }) => ({ variables: { exchange }, pollInterval: 3000 }),
})(ExchangePrice)
