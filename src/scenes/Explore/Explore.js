import React, { Component } from 'react'

import AddressInput from './components/AddressInput'

class Explore extends Component {
  static displayName = 'Explore'

  render = () =>
    <div id="explore-container" >
      <AddressInput />
    </div>
}

export default Explore
