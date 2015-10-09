var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/index'
  ],
  output: {
    path: './public/javascripts/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
  ],
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
