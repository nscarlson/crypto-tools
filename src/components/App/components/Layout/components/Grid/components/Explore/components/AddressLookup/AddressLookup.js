
import { string } from 'prop-types'
import React, { Component } from 'react'

import Address from './components/Address'

class AddressLookup extends Component {
  static displayName = 'AddressLookup'

  handleUpdateAddress = (address) => {
    this.setState({ address: address.target.value })
    console.log(`address updated: ${address.target.value}`)
  }

  render = () => (
    <div>
      <input
        onChange={this.handleUpdateAddress}
        placeholder="0x123456789abcdef"
      />
      <Address address="blahblah" />
    </div>
  )
}

export default AddressLookup
