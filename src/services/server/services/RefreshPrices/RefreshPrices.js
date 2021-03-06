import axios from 'axios'

import CryptowatchClient from '../API/services/CryptowatchClient'
const getExchanges = async () => {
  let results = null
  try {
    results = (await axios({
      data: {
        operationName: 'allExchanges',
        query: `query allExchanges {
          allExchanges{
              id
              name
            }
          }
        `,
      },
      method: 'post',
      responseType: 'json',
      url: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
    })).data.data.allExchanges

    return results
  } catch (err) {
    console.error(err)
  }
}

let exchanges = []

const cryptowatchClient = new CryptowatchClient()

const btcPriceResults = []

const fetchBtcPrices = async (exchange) => {
  try {
    // Fetch latest prices from cryptowat.ch
    const pricesByPairResult = await cryptowatchClient.getPricesByPair('btc_usd')

    btcPriceResults[exchange.name] = pricesByPairResult
      .filter((price) => exchange.name === price.exchange)
  } catch (err) {
    console.error(err)
  }
}

const mutateBtcPrices = async (data) => {
  try {
    exchanges = await getExchanges()

    exchanges.map(async (exchange) => {
      const exchangeId = exchange.id

      data[exchange.name].map(async (price) => {
        const pair = 'btc_usd'
        const timestamp = `${pair}_${price.exchange}_${Math.ceil(new Date().getTime() / 1000)}`
        const value = price.price

        const mutationResult = (await axios({
          data: {
            operationName: 'createPrice',
            query: `mutation createPrice (
              $exchangeId: ID!
              $pair: String!
              $timestamp: String!
              $value: Float!
            ) {
                createPrice (
                  exchangeId: $exchangeId
                  pair: $pair
                  timestamp: $timestamp
                  value: $value
                ) {
                  id
                  pair
                  timestamp
                  value
                  exchange {
                    name
                  }
                }
              }
            `,
            variables: {
              exchangeId,
              pair,
              timestamp,
              value,
            },
          },
          method: 'post',
          responseType: 'json',
          url: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
        })).data
      })
    })
  } catch (err) {
    console.error(err)
  }
}

/**
 * setTimeout() vs setInterval...
 * setTimeout avoids the potential issue of timer events "stacking"
 */

const RefreshPrices = () => {
  (async function refreshPrices () {
    try {
      console.log('refreshing price data')

      exchanges = await getExchanges()
      await Promise.all(
        exchanges.map(fetchBtcPrices)
      )
    } catch (err) {
      console.error(err)
    }
    mutateBtcPrices(btcPriceResults)

    setTimeout(refreshPrices, 7000)
  })()
}

export default RefreshPrices
