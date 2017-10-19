import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import ws from 'ws'

const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj8ff7iah067k01397yllgnis', {
  reconnect: true,
  timeout: 20000,
}, ws)

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis' })

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const apollo = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
})

export default apollo
