import AssetsPlugin from 'assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { resolve } from 'path'
import webpack from 'webpack'
import WebpackMd5Hash from 'webpack-md5-hash'

import config from './webpack.config.default'

const filename = `[name]${process.env.NODE_ENV === 'development' ? '' : '-[chunkhash]'}.js`

const client = {
  ...config,
  entry: {
    client: 'services/client',
  },
  name: 'client',
  output: {
    ...config.output,
    chunkFilename: filename,
    filename,
    path: resolve('./dist'),
  },
  plugins: [
    ...config.plugins,

    new CopyWebpackPlugin([
      { from: 'assets/images', to: 'images' },
    ]),

    // Extract all 3rd party modules into a separate 'vendor' chunk
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: ({ resource }) => /node_modules/.test(resource),
      name: 'vendor',
    }),

    // Generate a 'manifest' chunk to bootstrap webpack
    new webpack.optimize.CommonsChunkPlugin('manifest'),

    // Need this plugin for deterministic hashing
    // until this issue is resolved: https://github.com/webpack/webpack/issues/1315
    // for more info: https://webpack.js.org/how-to/cache/
    new WebpackMd5Hash(),

    // Creates a 'webpack-assets.json' file with all of the
    // generated chunk names so you can reference them
    new AssetsPlugin({
      prettyPrint: true,
    }),
  ],
}

export default client
