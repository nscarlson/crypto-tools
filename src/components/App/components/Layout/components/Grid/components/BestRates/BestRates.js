import axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'
class BestRates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'btc',
    }
    Promise.resolve(this.loadMap())
    Promise.resolve(this.loadPairs())
  }

  // Map short asset symbols to full names
  // Source: coincap.io
  loadMap = async () => {
    let symbolMap = null

    try {
      symbolMap = (await axios({
        responseType: 'json',
        url: 'http://coincap.io/map',
      })).data

      this.setState({ symbolMap })
    } catch (err) {
      console.error(err)
    }
  }

  // Load tradeable pairs from cryptowat.ch api
  loadPairs = async () => {
    let pairs = null

    try {
      pairs = (await axios({
        responseType: 'json',
        url: 'https://api.cryptowat.ch/pairs',
      })).data.result

      this.setState({ pairs })
      this.generateOptions(pairs)
    } catch (err) {
      console.error(err)
    }
  }

  generateOptions = (pairs) => {
    const options = []

    pairs.map((pair) => {
      options.push({
        label: pair.base.name,
        value: pair.base.id,
      })
    })

    this.setState({ options })
  }

  // Retrieve a coin symbol's name
  getNameFromSymbol = (symbol) => {
    let result = null

    result = this.state.map.filter((coin) => (coin.symbol === symbol))

    return result
  }

  handleSourceOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
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
          options={this.state.options}
          value="btc"
        />
        {'for'}
        <Select
          options={this.state.options}
          value="btc"
        />

      </div>
    </div>
    )
}

BestRates.displayName = 'BestRates'

export default BestRates
