const exchanges = [
  {
    id: 'cj8rvmvzy29yd01039wv0xd4g',
    name: 'kraken',
  },
  {
    id: 'cj8rvnboc29ym010348214io7',
    name: 'gdax',
  },
  {
    id: 'cj8rvnq4f29pb0172yw6g7bwe',
    name: 'gemini',
  },
  {
    id: 'cj8sa8dj82onw0172vmwzsce1',
    name: 'bitstamp',
  },
]

const resolvers = {
  Mutation: {
    createExchange: (_, data) => {
      const newExchange = Object.assign({ id: exchanges.length + 1 }, data)
      exchanges.push(newExchange)
      return newExchange
    },
  },
  Query: {
    allExchanges: () => exchanges,
  },
}

export default resolvers
