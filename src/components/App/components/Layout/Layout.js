import { node } from 'prop-types'
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import Explore from 'scenes/Explore'
import Price from './components/Grid/components/Price'

const ReactGridLayout = WidthProvider(RGL)

const layout = [
  { i: 'price', x: 0, y: 0, w: 12, h: 12, static: true },
  { i: 'menu', x: 0, y: 1, w: 2, h: 10, static: true },
  { i: 'bestmarkets', x: 7, y: 2, w: 12, h: 20 },
  { i: 'address1', x: 0, y: 3, w: 6, h: 20 },
  { i: 'address2', x: 0, y: 3, w: 6, h: 20 },
  { i: 'address3', x: 7, y: 4, w: 6, h: 20 },
  { i: 'address4', x: 7, y: 5, w: 6, h: 20 },
]
const Layout = ({ children }) => (
  <div className="layout">
    <ReactGridLayout layout={layout} cols={12} rowHeight={15} width={1200}>
      <div key="price">
        <div className="title"><span className="title">{'Latest BTCUSD Prices'}</span></div>
        <Price />
      </div>
      <div key="address1">
        <Explore />
      </div>
      <div key="address2">
        <Explore />
      </div>
      <div key="address3">
        <Explore />
      </div>
      <div key="address4">
        <Explore />
      </div>
      <div key="bestmarkets">
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
