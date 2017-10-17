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
  }

  componentDidMount () {
    this.loadAssets()
    this.loadMap()
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
  loadMap = async () => {
    try {
      const result = (await axios({
        responseType: 'json',
        url: 'https://coincap.io/map',
      })).data

      const map = new Map()

      result.map(asset => {
        map.set(asset.symbol, asset.name || asset.symbol)
      })
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

    this.setState({ options: options })
  }

  handleFromSelection = (value) => {
    console.log('handleFromSelection()')
    this.setState({
      selectedFromOption: value,
    })
    console.log('from:')
    console.log(this.state.selectedFromOption)
  }

  handleToSelection = (value) => {
    this.setState({
      selectedToOption: value,
    })
  }

  render = () => (
    <div>
      <div className="title">
        <span className="title">{'Best BTC Exchange Rates'}</span>
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
          src={`https://coincap.io/images/coins/${this.state.selectedFromOption}.png`}
          style={{ verticalAlign: 'middle' }}
          width={30}
        />
        {'for'}
        <Select
          onChange={this.handleToSelection}
          options={this.state.options}
          value={this.state.selectedToOption}
        />
      </div>
    </div>
    )
}

BestRates.displayName = 'BestRates'

export default BestRates
