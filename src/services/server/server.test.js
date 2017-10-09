jest.mock('./services/HMR')
jest.mock('./services/Render')
jest.mock('./services/StaticFiles')

let app, init

describe('server', () => {
  beforeEach(() => {
    const server = require('./server')
    app = server.default
    init = server.init
  })

  it(`inits the server on port 3000`, () => {
    jest.spyOn(app, 'listen').mockImplementation((port, cb) => cb())
    jest.spyOn(console, 'log').mockImplementation(() => {})

    init()

    expect(app.listen).toHaveBeenCalledWith(3000, expect.anything())
  })
})
