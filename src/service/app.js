const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const staticFile = require("koa-static");
const config = require("./config/index");
const ErrorHandle = require("./middlewares/ErrorHandle");
const logHandle = require("./middlewares/LogHandle")();

//404和500容错
ErrorHandle.error(app,logHandle);

//输出模板html
app.use(views(__dirname+ "/views"))

//静态文件
app.use(staticFile(__dirname));

//日志
//路由
const router = require("./routes/index");
router(app);




app.listen(config.port,config.href,()=> {
    console.log('server is running:',`http://${config.href}:${config.port}`);
})