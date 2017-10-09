/* eslint-disable sort-keys */

describe('liiist-config', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('defaults to the development config', () => {
    const config = require('./index')

    expect(config).toEqual({
      BM_GRAPHQL_TOKEN: process.env.BM_GRAPHQL_TOKEN,
    })
  })

  it('defines the correct development config', () => {
    process.env.NODE_ENV = 'development'

    const config = require('./index')

    expect(config).toEqual({
      BM_GRAPHQL_KEY: process.env.BM_GRAPHQL_TOKEN,
    })
  })

  it('defines the correct production config', () => {
    process.env.NODE_ENV = 'production'

    const config = require('./index')

    expect(config).toEqual({
      BM_GRAPHQL_KEY: process.env.BM_GRAPHQL_TOKEN,
    })
  })
})
