import { node } from 'prop-types'
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import BestRates from './components/Grid/components/BestRates'
import Explore from './components/Grid/components/Explore'
import Price from './components/Grid/components/Price'

const ReactGridLayout = WidthProvider(RGL)

const layout = [
  { i: 'price', x: 0, y: 0, w: 12, h: 12, static: true },
  { i: 'bestrates', x: 0, y: 12, w: 12, h: 26, static: true },
  { i: 'address1', x: 0, y: 38, w: 6, h: 20, static: true },
  //{ i: 'address2', x: 0, y: 15, w: 6, h: 20, static: true },
]
const Layout = ({ children }) => (
  <div className="layout">
    <ReactGridLayout cols={12} layout={layout} rowHeight={15} width={1200}>
      <div key="price">
        <div className="title">
          <span className="title">{'Latest BTCUSD Prices'}</span>
        </div>
        <Price />
      </div>
      <div key="bestrates">
        <BestRates />
      </div>
      <div key="address1">
        <Explore />
      </div>
    </ReactGridLayout>
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
