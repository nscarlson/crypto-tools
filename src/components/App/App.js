import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Explore from 'scenes/Explore'
import Markets from 'scenes/Markets'

const App = () => (
  <Layout>
    <Switch>
      <Route component={Explore} exact path="/" />
      <Route component={Markets} exact path="/markets" />
    </Switch>
  </Layout>
)

App.displayName = 'App'

export default App
