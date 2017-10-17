import React, { Component } from 'react'
import { string } from 'prop-types'

class ExchangeRate extends Component {
  static displayName = 'ExchangeRate'

  static propTypes = {
    exchange: string,
  }
  render = () => (
    <div className="exchange-item">
      <span className="exchange-title">{this.props.exchange}</span>
    </div>

  )
}

export default ExchangeRate
