const parts = require("./webpack.parts");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpg|jpeg|bmp)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: "5000"
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['assets/*','views/*'],
        }),
    ]
}

module.exports = merge([
    config,
    parts.loadJS({
        reg: /\.(js|jsx)$/,
        
    }),
    parts.htmlWebpackPlugin({
        filename: "views/index.html",
        template: "./src/web/index.html"
    })
]);
