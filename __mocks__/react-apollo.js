import ApolloClient from 'apollo-client'

const apollo = jest.genMockFromModule('react-apollo')

const createNetworkInterface = () => {}
const getDataFromTree = async () => {}
const graphql = () => (x) => x
const gql = () => ({})
const ApolloProvider = () => null

export { ApolloClient, ApolloProvider, createNetworkInterface, getDataFromTree, graphql, gql }
export default apollo
