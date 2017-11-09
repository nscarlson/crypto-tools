import React, { Component } from 'react'

import AddressLookup from './components/AddressLookup'

class Explore extends Component {
  static displayName = 'Explore'

  render = () =>
    <div id="explore-container">
      <div className="title">
        <span className="title">Lookup Address Information</span>
      </div>

      <AddressLookup />

    </div>
}

export default Explore
