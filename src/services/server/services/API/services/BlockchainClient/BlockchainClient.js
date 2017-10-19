import axios from 'axios'

class BlockchainClient {
  constructor () {
    this.createNewClient()
  }

  client = null

  createNewClient = () => {
    this.client = {
      baseURL: 'https://blockchain.info',
    }
  }

  /**
   * fetch a single address from blockchain.info
   */
  getRawAddr = async (address) => {
    try {
      const result = await axios({
        responseType: 'json',
        url: `${this.client.baseURL}/rawaddr/${address}`,
      })
      return result.data
    } catch (err) {
      console.error(err)
    }
  }

    /**
   * fetch a single tx from blockchain.info
   */
  getRawTx = async (hash) => {
    let result = null

    try {
      result = await axios({
        responseType: 'json',
        url: `${this.client.baseURL}/rawtx/${hash}`,
      }).data

      console.log(`fetching single tx ${hash}`)
      console.log(result)
      return result
    } catch (err) {
      console.error(err)
    }
  }
}

export default BlockchainClient
