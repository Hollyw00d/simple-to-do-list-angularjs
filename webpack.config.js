var path = require('path');
var webpack = require('webpack');

var config = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.min.js' 
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

module.exports = config;