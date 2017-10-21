import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Explore from 'scenes/Explore'

class App extends Component {
  static displayName = 'App'

  render = () => (
    <Layout>
      <Switch>
        <Route component={Explore} exact path="/" />
      </Switch>
    </Layout>
  )
}

export default App
