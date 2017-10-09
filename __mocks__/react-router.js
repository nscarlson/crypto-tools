const rr = jest.genMockFromModule('react-router')

rr.withRouter = jest.fn((x) => x)

module.exports = rr
