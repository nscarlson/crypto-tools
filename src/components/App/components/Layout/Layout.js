import React from 'react'

import BestRates from './components/Grid/components/BestRates'
import Explore from './components/Grid/components/Explore'
import Price from './components/Grid/components/Price'

const layout = [
  { i: 'price', x: 0, y: 0, w: 12, h: 12, static: true },
  { i: 'bestrates', x: 0, y: 12, w: 12, h: 26, static: true },
  { i: 'address1', x: 0, y: 38, w: 12, h: 20, static: true },
]

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
