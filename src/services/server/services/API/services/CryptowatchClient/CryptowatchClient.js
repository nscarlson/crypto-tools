import axios from 'axios'

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
   * Returns a list of available assets from cryptowat.ch
   */
  getAssets = async () => {
    let result = null
    try {
      result = (await axios({
        responseType: 'json',
        url: `${this.client.baseURL}/assets`,
      })).data.result
      return result
    } catch (err) {
      console.error('ERROR', err)
    }
  }

  /**
   *  Returns a market's latest price
   */
  getMarketPrice = async ({ pair, market }) => {
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

    return marketsResult
  }
}

export default CryptowatchClient
