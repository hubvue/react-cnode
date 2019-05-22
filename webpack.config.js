const {mode} = require("yargs-parser")(process.argv.slice(2));
const enviorConfig = require(`./config/webpack.${mode}.js`);
const commonConfig = require("./config/webpack.common.js");
const merge = require("webpack-merge");
const config = {

}

module.exports = merge([
    config,
    commonConfig,
    enviorConfig
])