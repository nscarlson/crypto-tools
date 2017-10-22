import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

// GraphCool subscriptions endpoint
const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj8ff7iah067k01397yllgnis', {
  reconnect: true,
  timeout: 20000,
})

// GraphCool simple API endpoint
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const apollo = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface: networkInterfaceWithSubscriptions,
})

export default apollo
