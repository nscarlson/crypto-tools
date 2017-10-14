/* eslint-disable sort-keys */

describe('config', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('defines the correct development config', () => {
    process.env.NODE_ENV = 'development'

    const config = require('./index')

    expect(config).toEqual({
      CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
    })
  })

  it('defines the correct production config', () => {
    process.env.NODE_ENV = 'production'

    const config = require('./index')

    expect(config).toEqual({
      CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
    })
  })
})
