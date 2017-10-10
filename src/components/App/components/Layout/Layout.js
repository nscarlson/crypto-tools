import { node } from 'prop-types'
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import Explore from 'scenes/Explore'

const ReactGridLayout = WidthProvider(RGL)

const layout = [
  { i: 'a', x: 0, y: 0, w: 10, h: 2 },
  { i: 'b', x: 1, y: 0, w: 3, h: 2 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
]
const Layout = ({ children }) => (
  <div>
    <ReactGridLayout layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key="a">
        <Explore />
      </div>
      <div key="b">
        <span className="text">{'This is a title'}</span>
      </div>
      <div key="c">
        <span className="text" style={{ color: 'white' }}>{'This is a title'}</span>
      </div>
    </ReactGridLayout>
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
