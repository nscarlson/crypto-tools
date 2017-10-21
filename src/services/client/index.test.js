jest.mock('babel-polyfill')
jest.mock('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', () => {}, { virtual: true })
jest.mock('index.scss', () => {})
jest.mock('./client')

describe('client entry point', () => {
  it('inits the client', () => {
    const { init } = require('./client')

    require('./index')

    expect(init).toHaveBeenCalled()
  })

  it('inits the client with NODE_ENV === development', () => {
    jest.resetModules()

    const { NODE_ENV } = process.env

    process.env.NODE_ENV = 'development'

    const { init } = require('./client')

    require('./index')

    expect(init).toHaveBeenCalled()

    process.env.NODE_ENV = NODE_ENV
  })
})
