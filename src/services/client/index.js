import 'babel-polyfill'
import 'isomorphic-fetch'

import 'index.scss'

import { init } from './client'

if (process.env.NODE_ENV === 'development') {
  require('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
  require('react-hot-loader/patch')
}

init()
