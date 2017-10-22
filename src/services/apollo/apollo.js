import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

const uri = 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis'
const subscriptionsURI = 'wss://subscriptions.us-west-2.graph.cool/v1/cj8ff7iah067k01397yllgnis'
let apollo = null

function _initClient (headers, initialState, subscriptionsInterface) {
  return new ApolloClient({
    dataIdFromObject: result => result.id || null,
    initialState,
    networkInterface: subscriptionsInterface || createNetworkInterface({ uri }),
    ssrMode: !process.browser,
  })
}

const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    // Server uses a standard ApolloClient instance
    return _initClient(headers, initialState)
  }
  if (!apollo) {
    // Client uses an ApolloClient that supports subscriptions
    apollo = _initClient(headers, initialState, addGraphQLSubscriptions(
      createNetworkInterface({ uri }),
      new SubscriptionClient(subscriptionsURI, { reconnect: true })
    ))
  }
  return apollo
}

apollo = initClient()

export default apollo
