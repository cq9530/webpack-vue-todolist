var webpack = require('webpack');


module.exports = {
    entry: '../src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}