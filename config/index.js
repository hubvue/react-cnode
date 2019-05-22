const {join} = require("path");
const config = {
    baseUrl: "https://cnodejs.org/api/v1",
    port: 8080,
    href:"127.0.0.1",
    logDir : join(__dirname,'..',`logs/log.log`),
}
module.exports = config;