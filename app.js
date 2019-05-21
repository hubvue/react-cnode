const Koa = require("koa");
const app = new Koa();

const config = require("./config/index");

//路由
const router = require("./routes/index");
router(app);


app.listen(config.port,config.href,()=> {
    console.log('server is running:',`http://${config.href}:${config.port}`);
})