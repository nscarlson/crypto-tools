import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'
import apollo from 'services/apollo'
import { createStore } from 'services/redux/store'

const init = () => {
  const store = createStore(window.__INITIAL_STATE__)

  const doRender = (App) => {
    render(
      <AppContainer>
        <BrowserRouter>
          <ApolloProvider client={apollo} store={store}>
            <App />
          </ApolloProvider>
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('app'),
      () => {
        const initialState = document.getElementById('initial-state')

        if (initialState) {
          initialState.parentElement.removeChild(initialState)
        }
      }
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
