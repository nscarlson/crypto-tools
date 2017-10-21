const webpackHotMiddleware = jest.fn(() => (req, res, next) => {
  next()
})

module.exports = webpackHotMiddleware
