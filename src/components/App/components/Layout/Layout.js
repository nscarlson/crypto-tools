import { node } from 'prop-types'
import React from 'react'
import ReactGridLayout from 'react-grid-layout'
import { Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => (
  <div className="layout">
    <Switch>
      <Header />
    </Switch>
    {children}
    <ReactGridLayout />
    <Footer />
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
