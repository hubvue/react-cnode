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
        publicPath: "./"
    }
}

module.exports = merge([
    config,
    parts.devServe({
        options:{
            contentBase: './'
        }
    }),
    parts.loadCSS({
        uses: [{
            loader: "postcss-loader"
        }]
    }),
]);