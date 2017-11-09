
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
        className="address"
        onChange={this.handleUpdateAddress}
        placeholder="1FmDdtA9QrW1jwdA5cXB5cHEKXUF6PzV8w"
      />
      <Address address={this.state.address} />
    </div>
  )
}

export default AddressLookup
