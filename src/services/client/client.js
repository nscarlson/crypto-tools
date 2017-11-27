import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'
import apollo from 'services/apollo'

const init = () => {
  const doRender = (App) => {
    hydrate(
      <AppContainer>
        <BrowserRouter>
          <ApolloProvider client={apollo}>
            <App />
          </ApolloProvider>
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('app'),
    )
  }

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('components/App', () => {
      doRender(require('components/App').default)
    })
  }

  doRender(App)
}

export { init, module as m }
