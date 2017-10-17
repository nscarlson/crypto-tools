import React, { Component } from 'react'
import { number, string } from 'prop-types'

class ExchangeRate extends Component {
  static displayName = 'ExchangeRate'

  static propTypes = {
    exchange: string,
    lowestPrice: number,
    price: number,
  }

  render = () => (
    <div className={`exchange-item ${this.props.price === this.props.lowestPrice ? 'lowest-price' : null} `}>
      <span className="exchange-title">{this.props.exchange}</span>
      <img className="exchange-icon" src={`/dist/images/exchanges/${this.props.exchange}.png`} />
      {`Price: ${this.props.price}`}
      {(this.props.price === this.props.lowestPrice)
        ? null
        : `(${this.props.price - this.props.lowestPrice} more)`
      }
    </div>
  )
}

export default ExchangeRate
