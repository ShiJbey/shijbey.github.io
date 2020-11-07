const path = require('path');

module.exports = {
    entry: './js/main.js',
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env'
                ],
                plugins: [
                  // '@babel/plugin-transform-runtime'
                ]
              }
            }
          }
        ]
    }
};
