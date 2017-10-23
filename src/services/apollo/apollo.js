import { ApolloClient, createNetworkInterface } from 'react-apollo'

// GraphCool simple API endpoint
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
})

const apollo = new ApolloClient({
  networkInterface,
})

export default apollo
