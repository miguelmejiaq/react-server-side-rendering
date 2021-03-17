const path = require('path');
module.exports = {
    // Tell webpack the root file of out
    // server application
    entry: './src/client/client.js',
    // Tell webpack where to put the output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    // Tell webpack to run babel on every js file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}