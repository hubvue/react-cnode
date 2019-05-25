const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const staticFile = require("koa-static");
const config = require("./config/index");
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const ErrorHandle = require("./middlewares/ErrorHandle");
const logHandle = require("./middlewares/LogHandle")();

//404和500容错
ErrorHandle.error(app,logHandle);

//输出模板html
app.use(views(__dirname+ "/views"))

//静态文件
app.use(staticFile(__dirname));

//history-api-fallback
app.use(historyApiFallback({
    whiteList:[
        '/',
        '/api/topics',
        '/api/topics/ask',
        '/api/topics/share',
        '/api/topics/job',
        '/api/topics/good',
        '/api/acticle/:id',
        '/api/user/:id'
    ]
}))
//日志
//路由
const router = require("./routes/index");
router(app);





app.listen(config.port,config.href,()=> {
    console.log('server is running:',`http://${config.href}:${config.port}`);
})