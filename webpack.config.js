const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|j?p|svg|gif)?$/,
            use: 'url-loader?limit=8192'
        }]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.js','.jsx']
    }
};