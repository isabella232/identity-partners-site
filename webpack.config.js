var webpack = require('webpack');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: [
    './scripts/anchor.js',
    './scripts/utils.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets/js/'
  },

  devtool: '#cheap-module-eval-source-map',

  mode: NODE_ENV,

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['.js']
  }
};
