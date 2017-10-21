import { Router } from 'express'
import CryptowatchClient from '../CryptowatchClient'

const markets = Router()
const cryptowatchClient = new CryptowatchClient()

/**
 * Easy fix for exchanges supporting certain pairs with a fixed "base"
 * currency. For example, DogeCoin is usually considered a "bitcoin market"
 * coin, only displayed in terms of cost in bitcoin. To display Bitcoin in terms
 * of DogeCoin price, we can simply invert the XDG/BTC pair given
 * to us by Cryptowatch.
 *
 * Also note: in the case of ETH/BTC pair, btc takes precedence as the "base" currency
 */
markets.use('/markets/:pair', async (req, res) => {
  const pair = req.params.pair

  /**
   * :pair param must be of form <symbol1>_<symbol2>
   */
  if (/[a-z]{3,}_[a-z]{3,}/.test(pair)) {
    const symbols = pair.split('_')

    let pairData = null

    /**
     * validate both symbols in pair against currency symbol whitelist
     */
    try {
      pairData = await cryptowatchClient.getPricesByPair(pair)

      // if returned an empty array, invert the prices
      if (pairData.length === 0) {
        pairData = await cryptowatchClient.getPricesByPair(`${symbols[1]}_${symbols[0]}`)

        pairData.forEach((rate, index) => {
          pairData[index] = {
            exchange: rate.exchange,
            price: (1 / pairData[index].price),
          }
        })
      }

      // if returned array is still empty, exchange info for pair is not offered by cryptowat.ch
      if (pairData.length === 0) {
        res.status(400).send(`Trading between ${symbols[0]} and ${symbols[1]} is not supported`)
      }

      res.status(200).json(pairData)
    } catch (err) {
      console.error('ERROR', err)
    }
  } else {
    res.status(400).send('Malformatted currency pair. A valid example is /api/markets/eth_btc')
  }
})

export default markets
