const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: "[name].js",
        libraryTarget: 'umd',
        umdNamedDefine: true
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
        // 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
        new VueLoaderPlugin()
    ]
}
