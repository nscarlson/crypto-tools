import React from 'react'

import BestRates from 'scenes/BestRates'
import Explore from 'scenes/Explore'
import Price from 'scenes/Price'

const Layout = () => (
  <div className="layout">
    <div className="react-grid-item">
      <div key="price">
        <Price />
      </div>
    </div>

    <div className="react-grid-item">
      <div key="bestrates">
        <BestRates />
      </div>
    </div>

    <div className="react-grid-item">
      <div key="address1">
        <Explore />
      </div>
    </div>
  </div>
)

Layout.displayName = 'Layout'

export default Layout
