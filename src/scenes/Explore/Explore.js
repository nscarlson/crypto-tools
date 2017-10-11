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
        <thead>
          <td>Transaction</td><td>Confirmations</td><td>Amount</td>
        </thead>
      </table>
    </div>
}

export default Explore
