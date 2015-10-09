var webpack = require('webpack'),
    path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
    publicPath: '/assets'
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
