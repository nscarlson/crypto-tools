jest.mock('react-router')

jest.mock('./components/Document', () => () => null)

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
    const Render = require('./Render').default
    await Render(req, res)

    expect(res.send.mock.calls[0][0]).toEqual(expect.stringContaining('<!DOCTYPE html>'))
  })
})
