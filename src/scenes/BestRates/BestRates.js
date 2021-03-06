import axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'

import ExchangeRate from './components/ExchangeRate'

class BestRates extends Component {
  state = {
    amount: 1,
    exchangeRates: [],
    selectedFromOption: 'eth',
    selectedToOption: 'btc',
  }

  coinMap = new Map()

  componentDidMount () {
    this.fetchAssets()
    this.fetchCoinMap()
    this.fetchExchangeRates(this.state.selectedFromOption, this.state.selectedToOption)
  }

  // fetch tradeable assets from cryptowat.ch api
  fetchAssets = async () => {
    try {
      this.generateOptions((
        await axios({
          responseType: 'json',
          url: '/api/assets',
        })).data
      )
    } catch (err) {
      console.error(err)
    }
  }

  // fetch CoinCap map of symbols to asset names
  fetchCoinMap = async () => {
    try {
      const result = (await axios({
        responseType: 'json',
        url: 'https://coincap.io/map',
      })).data

      const coinMap = new Map()

      result.map(asset => {
        const symbol = asset.symbol.toLowerCase()
        const name = (asset.name || asset.symbol).toLowerCase()
        coinMap.set(symbol, name)
      })

      this.coinMap = coinMap
    } catch (err) {
      console.error(err)
    }
  }

  fetchExchangeRates = async (symbol1, symbol2) => {
    try {
      this.setState({
        exchangeRates: (await axios({
          responseType: 'json',
          url: `/api/markets/${symbol1}_${symbol2}`,
        })).data,
      })
    } catch (err) {
      console.error(err)

      this.setState({
        exchangeRates: [],
      })
    }
  }

  generateOptions = async (assets) => {
    this.setState({
      options: assets.map((asset) => (
        {
          label: `${asset.name} (${asset.symbol})`,
          value: asset.symbol,
        }
    )),
    })
  }

  getCoinURL = (symbol) => {
    const fiats = [
      'aud',
      'chf',
      'gbp',
      'jpy',
      'pln',
      'sgd',
      'brl',
      'cny',
      'hkd',
      'mxn',
      'rur',
      'zar',
      'cad',
      'eur',
      'inr',
      'php',
      'sek',
    ]

    if (symbol) {
      const baseURL = 'https://coincap.io/images/coins/'

      let name = this.coinMap.get(symbol)

      if (name) {
        name = name.replace(/[^a-z]/gi, '')
      }

      if (fiats.includes(symbol)) {
        name = symbol
      }

      // because rubles are so special
      if (name === 'rur') {
        name = 'rub'
      }

      return baseURL + name
    } else {
      return null
    }
  }

  handleAmountChange = (amount) => {
    this.setState({
      amount: amount.target.value,
    })
  }

  handleFromSelection = (option) => {
    this.setState({
      selectedFromOption: option.value,
    })
    this.fetchExchangeRates(option.value, this.state.selectedToOption)
  }

  handleToSelection = (option) => {
    this.setState({
      selectedToOption: option.value,
    })
    this.fetchExchangeRates(this.state.selectedFromOption, option.value)
  }

  render = () => {
    const exchangeRates = this.state.exchangeRates
    let exchangePrices

    if (exchangeRates.length > 0) {
      exchangePrices = exchangeRates.map(
      (exchange) => (
        <ExchangeRate
          amount={this.state.amount}
          exchange={exchange.exchange}
          from={this.state.selectedFromOption}
          key={exchange.exchange}
          lowestPrice={this.state.exchangeRates[0].price}
          price={exchange.price}
          to={this.state.selectedToOption}
        />
      )
    )
    } else {
      exchangePrices = <div>
        {`Trading pair ${this.state.selectedFromOption}_${this.state.selectedToOption} not available on known exchanges`}
      </div>
    }

    return (
      <div className="best-rates-container">
        <div className="title">
          <span className="title">{`Search Best Crypto Exchange Rates`}</span>
        </div>
        <div className="from-container">
          <div className="from-left">
            {'I have'}
            <input className="amount" onChange={this.handleAmountChange} placeholder={`${this.state.selectedFromOption} amount`} value={this.state.amount} />
          </div>

          <div className="from-right">
            {'of'}
            <div className="select-asset-container">
              <Select
                onChange={this.handleFromSelection}
                options={this.state.options}
                value={this.state.selectedFromOption}
              />
              <img
                height={30}
                src={`${this.getCoinURL(this.state.selectedFromOption)}.png`}
                style={{ verticalAlign: 'middle' }}
                width={30}
              />
            </div>

          </div>
        </div>

        <div className="to-container">
          {'to exchange for'}

          <div className="select-asset-container">
            <Select
              onChange={this.handleToSelection}
              options={this.state.options}
              value={this.state.selectedToOption}
            />
            <img
              height={30}
              src={`${this.getCoinURL(this.state.selectedToOption)}.png`}
              style={{ verticalAlign: 'middle' }}
              width={30}
            />
          </div>
        </div>

        <div className="exchange-list">
          {exchangePrices}
        </div>

      </div>
    )
  }
}

BestRates.displayName = 'BestRates'

export default BestRates
