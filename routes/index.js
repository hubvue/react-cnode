const router = require("koa-simple-router");

const TopicController = require("../controllers/TopicController");
const ArticController = require("../controllers/ArticController");
const topicController = new TopicController();
const articController = new ArticController();
module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', async ctx => ctx.body="首页");
        _.get('/topics',topicController.actionIndex());
        _.get('/topics/ask',topicController.actionAsk());
        _.get('/topics/share',topicController.actionShare());
        _.get('/topics/job',topicController.actionJob());
        _.get('/topics/good',topicController.actionGood());
        _.get('/topic/:id',articController.actionDetail());

    }))
};