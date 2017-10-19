import { Router } from 'express'
import BlockchainClient from '../BlockchainClient'

const markets = Router()
const blockchainClient = new BlockchainClient()

/**
 * Easy fix for exchanges supporting certain pairs with a fixed "base"
 * currency. For example, DogeCoin is usually considered a "bitcoin market"
 * coin, only displayed in terms of cost in bitcoin. To display Bitcoin in terms
 * of DogeCoin price, we can simply invert the XDG/BTC pair given
 * to us by Cryptowatch.
 *
 * Also note: in the case of ETH/BTC pair, btc takes precedence as the "base" currency
 */
markets.use('/blockchain/rawaddr/:address', async (req, res) => {
  const address = req.params.address

  try {
    const result = await blockchainClient.getRawAddr(address)
    res.status(200).json(result)
  } catch (err) {
    console.err('ERROR', err)
  }
})

export default markets
