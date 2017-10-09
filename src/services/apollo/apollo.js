import { ApolloClient, createNetworkInterface } from 'react-apollo'

const apollo = new ApolloClient({
  connectToDevTools: typeof window !== 'undefined',
  networkInterface: createNetworkInterface({
    uri: `/graphql`,
  }),
  queryDeduplication: true,
  shouldBatch: true,
})

export default apollo
