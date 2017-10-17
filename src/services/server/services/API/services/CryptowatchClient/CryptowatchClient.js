
class CryptowatchClient {
  constructor () {
    this.createNewClient()
  }

  client = null

  createNewClient = () => {
    this.client = {
      baseURL: 'https://api.cryptowat.ch',
      markets: '',
    }
  }

  /**
   *  Returns a market's latest price
   */
  getMarketPrice = async({ pair, market }) => {
    let result = null

    try {
      result = await (await fetch(`${this.client.baseURL}/markets/${market}/${pair}/price`)).json()
      return result
    } catch (err) {
      console.error('ERROR', err)
    }
  }

  /**
   * Returns all markets for this pair
   */
  getPair = async ({ pair }) => {
    let result = null

    try {
      result = await (await fetch(`${this.client.baseURL}/pair`)).json()

      console.log('pairData', result)

      return result
    } catch (err) {
      console.error('ERROR', err)
    }
  }

  /**
   * Returns the current price for all supported markets. Markets are identified by a slug in the form exchange:pair
   */
  getPrices = async () => {
    let result = null

    try {
      result = await (await fetch(`${this.client.baseURL}/markets/prices`)).json()

      return result
    } catch (err) {
      console.error('ERROR', err)
    }
  }

  getPricesByPair = async (pair) => {
    let prices = null
    let marketsResult = null
    const symbols = pair.toLowerCase().split('_')

    try {
      prices = (await this.getPrices()).result
    } catch (err) {
      console.error('ERROR', err)
    }

    marketsResult = Object.keys(prices)
      .filter(key => key.includes(`${symbols[0]}${symbols[1]}`) && prices[key] > 0)
      .map((value) => {
        const exchange = value.replace(`:${symbols[0]}${symbols[1]}`, '')
        const price = prices[value]
        return { exchange: exchange, price }
      })
      .sort((a, b) => a.price - b.price)

    marketsResult[0] && console.log(`${marketsResult[0].exchange} offers the best ${symbols[0]} price of ${marketsResult[0].price} ${symbols[1]}`)

    return marketsResult
  }
}

export default CryptowatchClient
