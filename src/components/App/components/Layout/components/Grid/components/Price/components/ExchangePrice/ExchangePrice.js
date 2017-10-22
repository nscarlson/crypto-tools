import { func, object, string } from 'prop-types'
import { graphql, gql } from 'react-apollo'
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
    allPricesQuery: object,
    exchange: string,
    name: string,
  }

  componentDidMount = async () => {
    // Subscribe to `CREATED`-mutations
    this.createMessageSubscription = this.props.allPricesQuery.subscribeToMore({
      document: gql`
          subscription {
              Price(filter: {
                mutation_in: [CREATED]
              }) {
                  node {
                    id
                    timestamp
                    value
                    exchange {
                      name
                    }
                  }
              }
          }
      `,
      onError: (err) => console.error(err),

      updateQuery: (previousState, { subscriptionData }) => {
        console.log('previousState')
        console.log(previousState)
        const newPrice = subscriptionData.data.Price.node
        console.log('newPrice:')
        console.log(newPrice)
        const prices = previousState.allPrices.concat([newPrice])
        return {
          allPrices: prices,
        }
      },
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.allPricesQuery.allPrices !== this.props.allPricesQuery.allPrices && this.endRef) {
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
    if (this.props.allPricesQuery.loading) {
      return (
        <div className="exchange-price">
          <h1>{this.props.name}</h1>
          <Spinner />
        </div>
      )
    }

    const latestPrice = this.props.allPricesQuery.allPrices[0].value

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
  name: 'allPricesQuery',
  options: ({ exchange }) => ({ variables: { exchange } }),
})(ExchangePrice)
