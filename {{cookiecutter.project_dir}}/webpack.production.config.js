var webpack = require('webpack')

var config = require('./webpack.base.config.js')

config.output.path = require('path').resolve('{{ cookiecutter.production_output_path }}')

config.plugins = config.plugins.concat([

  // removes a lot of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  // keeps hashes consistent between compilations
  new webpack.optimize.OccurenceOrderPlugin(),

  // minifies your code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

//config.output.publicPath = `https://s3.amazonaws.com/${process.env.DJANGO_AWS_STORAGE_BUCKET_NAME}/dist/`;

module.exports = config
