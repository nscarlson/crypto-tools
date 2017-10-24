import 'babel-polyfill'
import 'isomorphic-fetch'
import 'source-map-support/register'

import { init } from './server'
import RefreshPrices from './services/RefreshPrices'

init()
RefreshPrices()
