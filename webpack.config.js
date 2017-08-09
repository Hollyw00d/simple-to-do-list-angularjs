const path = require('path');
const webpack = require('webpack');

const config = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        // File below used for dev
        // filename: 'bundle.js'
        
        // File below used for production
        filename: 'bundle.min.js' 
    }
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};

module.exports = config;