import { ApolloClient } from 'react-apollo'

import apollo from './apollo'

describe('apollo client', () => {
  it('is an instance of ApolloClient', () => {
    expect(apollo instanceof ApolloClient).toBe(true)
  })
})
