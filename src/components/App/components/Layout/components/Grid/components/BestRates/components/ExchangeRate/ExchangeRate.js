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
    <div className={`exchange-rate-container ${this.props.price === this.props.lowestPrice ? 'lowest-price' : null} `}>
      <div className="icon-container">
        <img className="exchange-icon" src={`/dist/images/exchanges/${this.props.exchange}.png`} />
      </div>
      <div className="exchange-price-container">
        {this.props.exchange}
        <br />
        {`Price: ${(this.props.price).toPrecision(6)}`}
      </div>
      <div className="exchange-price-difference">
        {(this.props.price === this.props.lowestPrice)
          ? null
          : `(${(this.props.price - this.props.lowestPrice).toPrecision(6)} more than lowest exchange)`
        }</div>
    </div>
  )
}

export default ExchangeRate
