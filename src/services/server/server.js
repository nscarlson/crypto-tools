import cors from 'cors'
import express from 'express'

import API from './services/API'
import GraphQL from './services/GraphQL'
import HMR from './services/HMR'
import Render from './services/Render'
import StaticFiles from './services/StaticFiles'

const app = express()

app.use(cors())
app.use(GraphQL)
app.use(API)
app.use(HMR)
app.use(StaticFiles)
app.use(Render)

const init = () => {
  app.listen(8000, () => {
    console.log('Listening on port 8000')
  })
}

export { init }
export default app
