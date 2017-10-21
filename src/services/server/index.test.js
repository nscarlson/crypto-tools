jest.mock('babel-polyfill')
jest.mock('./server')

describe('server entry point', () => {
  it('inits the server', () => {
    const { init } = require('./server')

    require('./index')

    expect(init).toHaveBeenCalled()
  })
})
