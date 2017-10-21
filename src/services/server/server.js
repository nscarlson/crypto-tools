import axios from 'axios'
import cors from 'cors'
import express from 'express'

import API from './services/API'
import HMR from './services/HMR'
import Render from './services/Render'
import StaticFiles from './services/StaticFiles'
import RefreshPrices from './services/RefreshPrices'

const app = express()

app.use(cors())
app.use(API)
app.use(HMR)
app.use(StaticFiles)
app.use(Render)

const init = () => {
  app.listen(8000, () => {
    console.log('Listening on port 8000')
  })
}

RefreshPrices()

export { init }
export default app
