const parts = require("./webpack.parts");
const merge = require("webpack-merge");
const {resolve} = require("path");


const config = {
    entry: {
        "main": resolve("./src/web/index.js"),
    },
    output: {
        filename: "assets/scripts/[name]-[chunkHash:5].js",
        path: resolve("dist"),
        publicPath: "../"
    },
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
    }
};

module.exports = merge([
    config,
    parts.miniExtractCSS({
        uses: [{
            loader: "postcss-loader"
        }]
    }),
])