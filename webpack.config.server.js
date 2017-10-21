import config from './webpack.config.default'

const server = {
  ...config,
  entry: {
    'private/server': 'services/server',
  },
  externals: (context, request, callback) => {
    if (request.match(/^(\.{0,2})\//)) {
      // Absolute or relative path
      return callback()
    }

    try {
      // Attempt to resolve via Node
      require.resolve(request)
      callback(null, request)
    } catch (e) {
      // Fallback
      callback()
    }
  },
  name: 'server',
  target: 'node',
}

export default server
