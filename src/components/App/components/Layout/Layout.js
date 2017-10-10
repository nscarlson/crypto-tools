import { node } from 'prop-types'
import React from 'react'
import ReactGridLayout from 'react-grid-layout'
import { Switch } from 'react-router-dom'

import Explore from 'scenes/Explore'
import Header from './components/Header'
import Footer from './components/Footer'

const layout = [
  { i: 'a', x: 0, y: 0, w: 10, h: 2 },
  { i: 'b', x: 1, y: 0, w: 3, h: 2 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
]
const Layout = ({ children }) => (
  <div className="layout">

    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div className="panel" key="a">
        <Explore />
      </div>
      <div className="panel" key="b">b</div>
      <div className="panel" key="c">c</div>
    </ReactGridLayout>
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
