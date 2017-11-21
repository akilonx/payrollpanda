/* webpack.config.js */
module.exports = {
    entry: './src/js/app/app.js',
    output: {
        path: __dirname + '/resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}