import React, { Component } from 'react'
import { number, string } from 'prop-types'

class ExchangeRate extends Component {
  static displayName = 'ExchangeRate'

  static propTypes = {
    amount: number,
    exchange: string,
    from: string,
    lowestPrice: number,
    price: number,
    to: string,
  }

  render = () => {
    const { amount, from, lowestPrice, price, to } = this.props
    return (
      <div className={`exchange-rate-container ${price === this.props.lowestPrice ? 'lowest-price' : null} `}>
        <div className="icon-container">
          <img className="exchange-icon" src={`/dist/images/exchanges/${this.props.exchange}.png`} />
        </div>
        <div className="exchange-price-container">
          {this.props.exchange}
          <br />
          {`Get ${price * amount} ${to} at ${(price).toPrecision(6)} ${to} / 1 ${from}`}
        </div>
      </div>
    )
  }
}

export default ExchangeRate
