import { node } from 'prop-types'
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import Explore from 'scenes/Explore'
import Price from './components/Grid/components/Price'

const ReactGridLayout = WidthProvider(RGL)

const layout = [
  { i: 'price', x: 0, y: 0, w: 12, h: 2, static: true },
  { i: 'menu', x: 0, y: 1, w: 2, h: 10, static: true },
  { i: 'explore', x: 2, y: 2, w: 3, h: 2 },
]
const Layout = ({ children }) => (
  <div>
    <ReactGridLayout layout={layout} cols={12} rowHeight={15} width={1200}>
      <div key="menu">
        <i aria-hidden="true" className="fa fa-plus-circle" />
        {'New Address box'}
      </div>
      <div key="price">
        <Price />
      </div>
      <div key="explore">
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
