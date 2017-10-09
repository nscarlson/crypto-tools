import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'

const init = () => {
  const doRender = (App) => {
    render(
      <AppContainer>
        <BrowserRouter>
          <App />
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
