var path = require('path');

var config = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    }
};

module.exports = config;