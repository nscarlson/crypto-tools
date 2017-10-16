import axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'

class BestRates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'btc',
    }
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

  generateOptions = async (assets) => {
    const options = []

    assets.map((asset) => {
      options.push({
        label: asset.name,
        value: asset.id,
      })
    })

    this.setState({ options: options })
  }

  // Retrieve a coin symbol's name
  getNameFromSymbol = (symbol) => {
    let result = null

    result = this.state.map.filter((coin) => (coin.symbol === symbol))

    return result
  }

  render = () => (
    <div>
      <div className="title">
        <span className="title">{'Best BTC Exchange Rates'}</span>
      </div>

      <div>
        {'I want to exchange'}
        <Select
          options={this.state.options}
        />
        {'for'}
        <Select
          options={this.state.options}
        />

      </div>
    </div>
    )
}

BestRates.displayName = 'BestRates'

export default BestRates
