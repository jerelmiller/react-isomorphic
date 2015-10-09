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
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
      }
    ]
  }
}
