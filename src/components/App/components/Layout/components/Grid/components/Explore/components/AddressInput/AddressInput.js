import React, { Component } from 'react'

class AddressInput extends Component {
  static displayName = 'AddressInput'

  render = () =>
    <div id="address-input-container">
      <input placeholder="0x123456789abcdef" />
    </div>
}

export default AddressInput
