import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { Router } from 'express'

import mongoConnector from './services/mongoConnector'
import schema from './services/schema'

const GraphQL = Router()

const mongo = mongoConnector()

GraphQL.use('/graphql', bodyParser.json(), graphqlExpress({
  context: { mongo },
  schema,
}))

GraphQL.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',

    // Replace this e-mail with another to test with another user in your db.
  passHeader: `'Authorization': 'bearer token-foo@bar.com'`,

  subscriptionsEndpoint: `ws://localhost:${8000}/subscriptions`,
}))

export default GraphQL
