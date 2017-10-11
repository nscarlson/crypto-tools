import { object } from 'prop-types'
import React, { Component } from 'react'

class Price extends Component {
  static displayName = 'Price'

  static propTypes = {
    data: object,
  }

  render = () => {
    if (this.props.data.loading) {
      return (<div>{'LOADING'}</div>)
    }
    console.log('data')
    console.log(this.props.data)
    return (
      <div>
        {this.props.data.allPrices.map(({ id }) => (
          <div key={id}>
            {id}
          </div>
       ))}
        <span className="price-text">{'usd price: '}</span>
        <span className="price-positive">{'1.2%'}</span>
        <div className="arrow-up" />
      </div>
    )
  }
}

Price.displayName = 'Price'

export default Price
