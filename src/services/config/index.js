/* eslint-disable sort-keys */

const config = {
  development: {
    CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
  },
  production: {
    CRYPTOWATCH_BASE_URI: 'https://api.cryptowat.ch',
  },
}

module.exports = config[process.env.NODE_ENV] || config.development
