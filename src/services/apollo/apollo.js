import { ApolloClient, createNetworkInterface } from 'react-apollo'

const apollo = new ApolloClient({
  connectToDevTools: typeof window !== 'undefined',
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
  }),
  queryDeduplication: true,
  shouldBatch: true,
})

export default apollo
