import { Router } from 'express'
import BlockchainClient from '../BlockchainClient'

const markets = Router()
const blockchainClient = new BlockchainClient()

markets.use('/blockchain/rawaddr/:address', async (req, res) => {
  const address = req.params.address

  try {
    const result = await blockchainClient.getRawAddr(address)
    res.status(200).json(result)
  } catch (err) {
    console.error('ERROR', err)
  }
})

markets.use('/blockchain/rawtx/:tx', async (req, res) => {
  const tx = req.params.tx

  try {
    const result = await blockchainClient.getRawTx(tx)
    res.status(200).json(result)
  } catch (err) {
    console.error('ERROR', err)
  }
})

export default markets
