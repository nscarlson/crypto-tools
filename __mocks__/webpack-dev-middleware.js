const webpackDevMiddleware = jest.fn(() => (req, res, next) => {
  next()
})

module.exports = webpackDevMiddleware
