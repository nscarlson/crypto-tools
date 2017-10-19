import React, { Component } from 'react'

import Address from './components/Address'

class Explore extends Component {
  static displayName = 'Explore'

  constructor (props) {
    super(props)
    this.state = {
      address: '',
    }
  }

  handleUpdateAddress = (address) => {
    this.setState({ address: address.target.value })
    console.log(`address updated: ${address.target.value}`)
  }

  render = () =>
    <div id="explore-container">
      <div className="title">
        <span className="title">Search Address</span>
      </div>
      <input
        onChange={this.handleUpdateAddress}
        placeholder="0x123456789abcdef"
      />

      <Address address={this.state.address} />

    </div>
}

export default Explore
