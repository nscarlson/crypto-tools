import React from 'react'

const Price = () => (
  <div>
    <span className="price-text">{'usd price: '}</span>
    <span className="price-positive">{'1.2%'}</span>
    <div className="arrow-up" />
  </div>
)

Price.displayName = 'Price'

export default Price
