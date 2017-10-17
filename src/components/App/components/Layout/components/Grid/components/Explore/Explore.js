import React, { Component } from 'react'

import AddressInput from './components/AddressInput'

class Explore extends Component {
  static displayName = 'Explore'

  render = () =>
    <div id="explore-container">
      <div className="title">
        <span className="title">Search Address</span>
      </div>
      <AddressInput />
      <table>
        <tbody><tr><td>TEST</td></tr></tbody>

      </table>
    </div>
}

export default Explore
