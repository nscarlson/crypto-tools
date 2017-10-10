import React, { Component } from 'react'

import AddressInput from './components/AddressInput'

class Explore extends Component {
  static displayName = 'Explore'

  render = () =>
    <div id="explore-container">
      <span className="title" style={{ padding: '4px' }}>This is a title</span>
      <AddressInput />
    </div>
}

export default Explore
