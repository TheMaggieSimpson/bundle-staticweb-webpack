const webpack = require('webpack')

module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // inject CSS to page
          'css-loader', // translates CSS into CommonJS modules
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery", // to make sure jquery is globally accessable
        jQuery: "jquery",
    })
  ]
};