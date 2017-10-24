import { Router } from 'express'
import CryptowatchClient from '../CryptowatchClient'

const assets = Router()
const cryptowatchClient = new CryptowatchClient()

assets.use('/assets', async (req, res) => {
  try {
    const result = await cryptowatchClient.getAssets()
    res.status(200).json(result)
  } catch (err) {
    console.error('ERROR', err)
  }
})

export default assets
