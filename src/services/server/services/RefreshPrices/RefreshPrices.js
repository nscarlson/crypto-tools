import axios from 'axios'

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

const btcPriceResults = {}

const fetchBtcPrices = async (exchange) => {
  try {
    // Compute UNIX timestamp for use with cryptowat.ch API
    // 60 second interval for price ticker
    const timestamp60 = Math.ceil(new Date().getTime() / 1000) - 60

    // Fetch 60-second intervals from cryptowat.ch
    btcPriceResults[exchange.name] = (await axios({
      responseType: 'json',
      url: `https://api.cryptowat.ch/markets/${exchange.name}/btcusd/ohlc?periods=60&after=${timestamp60}`,
    })).data.result['60']
  } catch (err) {
    console.error(err)
  }
}

const mutateBtcPrices = async (data) => {
  let exchanges = null
  try {
    exchanges = await getExchanges()

    exchanges.map(async (exchange) => {
      const exchangeId = exchange.id

      data[exchange.name].map(async (price) => {
        const ohlc = price
        const timestamp = `${exchange.name}_60_${price[0]}`
        const pair = 'btcusd'

        const mutationResult = (await axios({
          data: {
            operationName: 'createPrice',
            query: `mutation createPrice (
              $exchangeId: ID!
              $pair: String!
              $timestamp: String!
              $ohlc: [Float!]!
            ) {
                createPrice (
                  exchangeId: $exchangeId
                  ohlc: $ohlc
                  pair: $pair
                  timestamp: $timestamp
                ) {
                  id
                  exchange {
                    name
                  }
                  timestamp
                }
              }
            `,
            variables: {
              exchangeId,
              ohlc,
              pair,
              timestamp,
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
    let exchanges = null

    try {
      exchanges = await getExchanges()

      await Promise.all(
        exchanges.map(fetchBtcPrices)
      )
    } catch (err) {
      console.error(err)
    }

    mutateBtcPrices(btcPriceResults)

    setTimeout(refreshPrices, 60000)
  })()
}

export default RefreshPrices
