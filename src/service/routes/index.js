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
        _.get('/topics', topicController.actionIndex());
        _.get('/topics/ask', topicController.actionAsk());
        _.get('/topics/share', topicController.actionShare());
        _.get('/topics/job', topicController.actionJob());
        _.get('/topics/good', topicController.actionGood());
        _.get('/topic/:id', articController.actionDetail());
        _.get('/user/:id', userController.actionUser());
    }));
};