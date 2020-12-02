const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './example/main.js',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './example/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../example/dist'),
        port: 8080
    },
    resolve: {
        alias: {
            main: path.resolve(__dirname, '../src')
        }
    }
}
