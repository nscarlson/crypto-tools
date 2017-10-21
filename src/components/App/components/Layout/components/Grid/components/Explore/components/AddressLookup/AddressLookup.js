
import { string } from 'prop-types'
import React, { Component } from 'react'

import Address from './components/Address'

class AddressLookup extends Component {
  static displayName = 'AddressLookup'

  constructor (props) {
    super(props)
    this.state = {
      address: '',
    }
  }

  handleUpdateAddress = (address) => {
    this.setState({ address: address.target.value })
  }

  render = () => (
    <div>
      <input
        onChange={this.handleUpdateAddress}
        placeholder="0x123456789abcdef"
      />
      <Address address={this.state.address} />
    </div>
  )
}

export default AddressLookup
