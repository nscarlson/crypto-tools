import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Home from 'scenes/Home'

const App = () => (
  <Layout>
    <Switch>
      <Route component={Home} exact path="/" />
    </Switch>
  </Layout>
)

App.displayName = 'App'

export default App
