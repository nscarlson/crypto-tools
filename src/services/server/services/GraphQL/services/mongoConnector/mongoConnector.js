import { MongoClient } from 'mongodb'

const MONGO_URL = 'mongodb://user:user@ds243085.mlab.com:43085/crypto-tools'

const mongoConnector = async () => {
  const db = await MongoClient.connect(MONGO_URL)
  return { Links: db.collection('links') }
}

export default mongoConnector
