var webpack = require('webpack')

module.exports = {
  entry: {
    payment: __dirname +'/src/entry.js'
  },
  output: {
    path: __dirname,
    filename: '/dist/[name].build.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"}
    ]
  }
}