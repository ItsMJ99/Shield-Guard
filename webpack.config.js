const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/config.js',
    output: {
        path: path.resolve(__dirname, 'webpages'),
        filename: 'bundle.js'
    },
    watch: true
}