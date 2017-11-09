import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const typeDefs = `
  type Exchange {
    id: ID!
    name: String!
    prices: [Price!]!
  }

  type Query {
    allExchanges: [Exchange!]!
  }

  type Mutation {
    createExchange(name: String!): Exchange
  }

  type Transaction @model {
    id: ID! @isUnique
    hash: String! @isUnique
    time: Int!
    txindex: Int!
    btcAddress: BtcAddress
    inputs: [Input!]!
    outputs: [Output!]!
  }

  type Input @model {
    id: ID! @isUnique
    address: String!
    spent: Boolean!
    txindex: Int!
    value: Int!
    transaction: Transaction
  }

  type Output @model {
    id: ID! @isUnique
    address: String!
    spent: Boolean!
    txindex: Int!
    value: Int!
    transaction: Transaction
  }

  type Price @model {
    id: ID! @isUnique
    pair: String!
    timestamp: String!
    value: Float!
    exchange: Exchange
  }

  type BtcAddress @model {
    id: ID! @isUnique
    address: String! @isUnique
    hash160: String! @isUnique
    totalreceived: Int!
    totalsent: Int!
    balance: Int!
    transactions: [Transaction!]! @relation(name: "BtcAddressOnTransaction")
  }
`

export default makeExecutableSchema({ resolvers, typeDefs })
