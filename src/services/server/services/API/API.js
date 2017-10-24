import { Router } from 'express'

import assets from './services/assets'
import blockchain from './services/blockchain'
import markets from './services/markets'

const API = Router()

API.use('/api/', assets)
API.use('/api/', markets)
API.use('/api/', blockchain)
API.use('/api/', (req, res) => {
  res.status(404).send('There is no spoon!')
})

export default API
