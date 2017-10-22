import { func, object, string } from 'prop-types'
import { graphql, gql } from 'react-apollo'
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
    livePricesQuery: func,
    movement: string,
    name: string,

  }

  componentDidMount = () => {
    // Subscribe to `CREATED`-mutations
    // this.createMessageSubscription = this.props.livePricesQuery.subscribeToMore({
    //   document: gql`
    //       subscription {
    //           Price(filter: {
    //             mutation_in: [CREATED]
    //           }) {
    //               node {
    //                 id
    //                 timestamp
    //                 value
    //               }
    //           }
    //       }
    //   `,
    //   onError: (err) => console.error(err),
    //   updateQuery: (previousState, { subscriptionData }) => {
    //     const newMessage = subscriptionData.data.Message.node
    //     const messages = previousState.allMessages.concat([newMessage])
    //     return {
    //       allMessages: messages,
    //     }
    //   },
    // })
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

    console.log(this.props.data.allPrices)
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

export default graphql(latestBtcPricesQuery, {
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
