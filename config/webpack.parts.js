/**
 * 解析css模块--开发环境
 */
exports.loadCSS = ({ reg = /\.css$/, include, exclude, uses = [] } = {}) => ({
    module: {
        rules: [{
            test: reg,
            include,
            exclude,
            use: [{
                loader: "style-loader",
            }, {
                loader: "css-loader"
            }].concat(uses)
        }]
    }
})

/**
 * 解析CSS模块，分离CSS---生产环境
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.miniExtractCSS = ({ reg = /\.css$/, include, exclude, uses = [] } = {}) => ({
    module: {
        rules: [{
            test: reg,
            include,
            exclude,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader"
            }].concat(uses)

        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/styles/[name]-[chunkhash:5].css",
            chunkFilename: "assets/styles/[id]-[chunkhash:5].css"
        })
    ]
})

/**
 * 
 * HtmlWebpackPlugin 插件
 */
const HtmlWebepackPlugin = require("html-webpack-plugin");
exports.htmlWebpackPlugin = (options) => ({
    plugins: [
        new HtmlWebepackPlugin({
            ...options
        })
    ]
})

/**
 * 
 * devServer相关配置
 */
exports.devServe = ({ port = 8000, host = "127.0.0.1", options = {} } = {}) => ({
    devServer: {
        port,
        host,
        hot: true,
        open: true,
        ...options
    }
})

/**
 * babel解析js
 */
exports.loadJS = ({ reg = /\.js$/, include, exclude } = {}) => ({
    module: {
        rules: [{
            test: reg,
            include,
            exclude,
            loader: "babel-loader"
        }]
    }
})

exports.loadImage = (options = {}) => ({
    module: {
        rules: [{
            test: /\.(png|gif|jpg|jpeg|bmp)$/,
            use: [{
                loader: "url-loader",
                options,
            }]
        }]
    }
})