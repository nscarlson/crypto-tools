import { graphql } from 'react-apollo'

import { createPrice } from 'services/mutations/prices'
import App from './App'

const AppContainer = graphql(createPrice, { name: 'createPrice' })(App)

AppContainer.displayName = 'AppContainer'

export default AppContainer
