const path = require('path');

module.exports = {
    entry: {
        infiniforge: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            three: path.resolve('./node_modules/three'),
        },
        fallback: {
            crypto: false,
        },
    },
};
