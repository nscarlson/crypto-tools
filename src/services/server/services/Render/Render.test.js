jest.mock('react-router')

jest.mock('./components/Document', () => () => null)
jest.mock('./services/resolveDependencies')

const rr = require('react-router')
rr.withRouter = (x) => x

describe('Render', () => {
  let req, res

  beforeEach(() => {
    req = {
      url: 'http://test/test?test=true',
    }

    res = {
      redirect: jest.fn(),
      send: jest.fn(),
    }
  })

  it('renders the html when all is well', async () => {
    // jest.mock('./services/resolveDependencies')

    const resolveDependencies = require('./services/resolveDependencies')
    resolveDependencies.default.mockImplementationOnce(() => Promise.resolve())

    const Render = require('./Render').default

    await Render(req, res)

    expect(res.send.mock.calls[0][0]).toEqual(expect.stringContaining('<!DOCTYPE html>'))
  })

  it('logs when there is an error resolving dependencies', async () => {
    const err = new Error()

    const resolveDependencies = require('./services/resolveDependencies')
    resolveDependencies.default.mockImplementationOnce(() => {
      throw err
    })

    const Render = require('./Render').default

    jest.spyOn(console, 'error').mockImplementation(() => {})

    await Render(req, res)

    expect(console.error).toHaveBeenCalledWith(err)
  })

  it('redirects if there is a context.url', async () => {
    const url = 'url'

    const { render } = rr.StaticRouter.prototype

    rr.StaticRouter.prototype.render = function () {
      this.props.context.url = 'url'
      return render()
    }

    const Render = require('./Render').default

    await Render(req, res)

    expect(res.redirect).toHaveBeenCalledWith(url)
  })
})
