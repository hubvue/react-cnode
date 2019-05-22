const log4js = require("log4js");
const config = require("../config/index");

module.exports = () =>{
    log4js.configure({
        appenders: {
            cheese: {
                type: "file",
                filename: config.logDir,
            }
        },
        categories: {
            default : {
                appenders: ['cheese'],
                level: 'error',
            }
        }
    });
    return log4js.getLogger('cheesse');
}