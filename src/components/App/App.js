import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Explore from 'scenes/Explore'
import Markets from 'scenes/Markets'
import { createPrice } from 'services/mutations/prices'

class App extends Component {
  static displayName = 'App'

  componentDidMount = () => {
    const intervalId = setInterval(this.refreshPrices, 5000)
    this.setState({ intervalId })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  refreshPrices = async () => {
    let krakenBtcPrices = null

    const markets = [ 'kraken', 'gdax', 'gemini', 'poloniex' ]

    try {
      [krakenBtcPrices, gdaxBtcPrices, geminiBtcPrices, poloniexBtcPrices] = await Promise.all(
        markets.map(this.fetchBtcPrices)
      )

      console.log(krakenBtcPrices)
    } catch (err) {
      console.error(err)
    }
  }

  fetchBtcPrices = async (exchange) => {
    let result = null

    try {
      // Fetch 15-minute intervals from cryptowat.ch
      result = (await (await fetch(`https://api.cryptowat.ch/markets/${exchange}/btcusd/ohlc`)).json()).result['60']
    } catch (err) {
      console.error(err)
    }

    return result
  }

  render = () => (
    <Layout>
      <Switch>
        <Route component={Explore} exact path="/" />
        <Route component={Markets} exact path="/markets" />
      </Switch>
    </Layout>
  )
}

export default graphql(createPrice)(App)
