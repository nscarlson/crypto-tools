import axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'

class BestRates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFromOption: 'btc',
      selectedToOption: 'eth',
    }
    this.fetchCoinMap()
  }

  coinMap = new Map()

  componentDidMount () {
    this.loadAssets()
  }

  // Load tradeable assets from cryptowat.ch api
  loadAssets = async () => {
    let assets = null

    try {
      assets = (await axios({
        responseType: 'json',
        url: 'https://api.cryptowat.ch/assets',
      })).data.result

      this.generateOptions(assets)
    } catch (err) {
      console.error(err)
    }
  }

  // Load CoinCap map of symbols to asset names
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

      console.log(this.coinMap)
    } catch (err) {
      console.error(err)
    }
  }

  generateOptions = async (assets) => {
    const options = []

    assets.map((asset) => {
      options.push({
        label: `${asset.name} (${asset.id})`,
        value: asset.id,
      })
    })

    this.setState({ options })
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
      'rub',
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
      console.log(name)

      return baseURL + name
    } else {
      return null
    }
  }

  handleFromSelection = (option) => {
    console.log('handleFromSelection()')
    this.setState({
      selectedFromOption: option.value,
    })
    console.log('from:')
    console.log(option)
    console.log('name:')
    console.log(this.coinMap.get(option.value))
  }

  handleToSelection = (value) => {
    this.setState({
      selectedToOption: value,
    })
  }

  render = () => (
    <div>
      <div className="title">
        <span className="title">{`Best BTC Exchange Rates`}</span>
      </div>

      <div>
        {'I want to exchange'}
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
        {'for'}
        <Select
          onChange={this.handleToSelection}
          options={this.state.options}
          value={this.state.selectedToOption}
        />
        <img
          height={30}
          src={`https://coincap.io/images/coins/ethereum.png`}
          style={{ verticalAlign: 'middle' }}
          width={30}
        />
      </div>
    </div>
  )
}

BestRates.displayName = 'BestRates'

export default BestRates
