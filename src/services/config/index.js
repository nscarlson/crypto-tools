/* eslint-disable sort-keys */

const config = {
  development: {
    BM_GRAPHQL_TOKEN: process.env.BM_GRAPHQL_TOKEN,
    BM_GRAPHQL_URI: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
    CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
  },
  production: {
    BM_GRAPHQL_TOKEN: process.env.BM_GRAPHQL_TOKEN,
    BM_GRAPHQL_URI: 'https://api.graph.cool/simple/v1/cj8ff7iah067k01397yllgnis',
    CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
  },
}

module.exports = config[process.env.NODE_ENV] || config.development
