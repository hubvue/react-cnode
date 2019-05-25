const parts = require("./webpack.parts");
const merge = require("webpack-merge");
const {resolve} = require("path");
const config = {
    entry: {
        "main": resolve("./src/web/index.js"),
    },
    output: {
        filename: "assets/scripts/[name].js",
        path: resolve("dist"),
        publicPath: "../"
    },
    devtool: "source-map"
}

module.exports = merge([
    config,
    parts.devServe({
        options:{
            contentBase: './dist',
            writeToDisk: true,          //写到硬盘里
            // historyApiFallback: true,   //HTML5 History API
            overlay:true,                //在浏览器上显示错误
            proxy: {
                "/topics":{
                    target: "http://127.0.0.1:8080"
                }
            }
        }
    }),
    parts.loadCSS({
        uses: [{
            loader: "postcss-loader"
        }]
    }),
]);