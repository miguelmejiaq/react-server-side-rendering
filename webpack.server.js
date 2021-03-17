const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    // Inform webpack that we're building a bundle 
    // for Node JS, rather than for the browser
    target: 'node',
    // Tell webpack the root file of out
    // server application
    entry: './src/index.js',
    // Tell webpack where to put the output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals: [webpackNodeExternals()]
};
module.exports = merge(baseConfig, config);