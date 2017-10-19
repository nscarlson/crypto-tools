import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { resolve } from 'path'
import webpack from 'webpack'

const config = {
  devServer: {
    hot: true,
    noInfo: true,
    publicPath: '/dist/',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
        }),
        test: /\.css$/,
      },
      {
        include: [
          resolve('src'),
          resolve('./'),
        ],
        loader: 'babel-loader?cacheDirectory',
        test: /\.js$/,
      },
      {
        test: /\.less$/,
        use: process.env.NODE_ENV === 'development' ? [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
        ] : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!less-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: process.env.NODE_ENV === 'development' ? [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ] : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader',
        }),
      },
      {
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
        test: /\.woff2$/,
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: resolve(),
    publicPath: '/dist/',
    sourceMapFilename: '[file].map',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new ExtractTextPlugin('[name]-[contenthash].css'),
    process.env.NODE_ENV === 'development' ? new webpack.HotModuleReplacementPlugin() : () => {},
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.less'],
    modules: [
      'node_modules',
      resolve('src'),
    ],
  },
}

export default config
