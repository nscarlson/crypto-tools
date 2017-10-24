jest.mock('babel-polyfill')
jest.mock('./server')
jest.mock('./services/RefreshPrices')

describe('server entry point', () => {
  it('inits the server', () => {
    const { init } = require('./server')

    require('./index')

    expect(init).toHaveBeenCalled()
  })

  it(`starts the RefreshPrices service`, () => {
    const RefreshPrices = require('./services/RefreshPrices').default

    expect(RefreshPrices).toHaveBeenCalled()
  })
})
