jest.mock('webpack')
jest.mock('webpack-dev-middleware')

jest.mock('../../../../../webpack.config.client')

describe('HMR', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('runs webpack if NODE_ENV === development', () => {
    const { NODE_ENV } = process.env

    process.env.NODE_ENV = 'development'

    require('./HMR')

    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')

    expect(webpack).toHaveBeenCalled()
    expect(webpackDevMiddleware).toHaveBeenCalled()

    process.env.NODE_ENV = NODE_ENV
  })

  it('does not run webpack of NODE_ENV === production', () => {
    const { NODE_ENV } = process.env

    process.env.NODE_ENV = 'production'

    require('./HMR')

    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')

    expect(webpack).not.toHaveBeenCalled()
    expect(webpackDevMiddleware).not.toHaveBeenCalled()

    process.env.NODE_ENV = NODE_ENV
  })
})
