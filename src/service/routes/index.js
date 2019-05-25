const router = require("koa-simple-router");

const TopicController = require("../controllers/TopicController");
const ArticController = require("../controllers/ArticController");
const UserController = require("../controllers/UserController");
const topicController = new TopicController();
const articController = new ArticController();
const userController = new UserController();

//路由注册中心
module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', async ctx => {
            await ctx.render('index');
        });
        _.get('/api/topics', topicController.actionIndex());
        _.get('/api/topics/ask', topicController.actionAsk());
        _.get('/api/topics/share', topicController.actionShare());
        _.get('/api/topics/job', topicController.actionJob());
        _.get('/api/topics/good', topicController.actionGood());
        _.get('/api/acticle/:id', articController.actionDetail());
        _.get('/api/user/:id', userController.actionUser());
    }));
};