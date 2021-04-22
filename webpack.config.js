const path = require('path');

module.exports = {
  entry: {
    home: './src/pages/home.jsx',
    infiniforge: './src/pages/infiniforge.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    inline: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/dist',
    watchContentBase: true,
  },
  mode: 'development',
};
