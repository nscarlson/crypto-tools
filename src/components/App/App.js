import { func } from 'prop-types'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Explore from 'scenes/Explore'
import Markets from 'scenes/Markets'

class App extends Component {
  static displayName = 'App'

  render = () => (
    <Layout>
      <Switch>
        <Route component={Explore} exact path="/" />
        <Route component={Markets} exact path="/markets" />
      </Switch>
    </Layout>
  )
}

export default App
