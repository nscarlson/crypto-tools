import { Router } from 'express'

import markets from './services/markets'
import blockchain from './services/blockchain'

const API = Router()

API.use('/api/', markets)
API.use('/api/', blockchain)
API.use('/api/', (req, res) => {
  res.status(404).send('There is no spoon!')
})

export default API
