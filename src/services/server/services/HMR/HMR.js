import { Router } from 'express'

const HMR = Router()

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const config = require('../../../../../webpack.config.client').default

  const compiler = webpack(config)

  HMR.use(webpackDevMiddleware(compiler, config.devServer))
  HMR.use(webpackHotMiddleware(compiler, {
    heartbeat: 10000,
    path: '/__webpack_hmr',
  }))
}

export default HMR
