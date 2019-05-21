const Topic = require("../models/Topic");
/**
 * 主题
 */
class TopicController {
    constructor(){
        this.topics = new Topic();
    }
    /**
     * 主题首页
     */
    actionIndex() {
        return async ctx => {
            const {page = 1,limit=20} = ctx.request.query;
            let data = await this.topics.getTopics({
                page,
                limit
            });
            ctx.body = data;
        }
    }
    /**
     * 问答分类
     */
    actionAsk() {
        return async ctx => {
            const {page = 1,limit=20} = ctx.request.query;
            let result = await this.topics.getTopicAsk({
                page,
                limit
            });
            ctx.body = result;
        }
    }
    /**
     * 分享分类
     */
    actionShare() {
        return async ctx => {
            const {page = 1,limit=20} = ctx.request.query;
            let result = await this.topics.getTopicShare({
                page,
                limit,
            });
            ctx.body = result;
        }
    }
    /**
     * 招聘分类
     */
    actionJob() {
        return async ctx => {
            const {page = 1,limit=20} = ctx.request.query;
            let result = await this.topics.getTopicJob({
                page,
                limit
            });
            ctx.body = result;
        }
    }
    /**
     * 好文分类
     */
    actionGood() {
        return async ctx => {
            const {page = 1,limit=20} = ctx.request.query;
            let result = await this.topics.getTopicGood({
                page,
                limit
            });
            ctx.body = result;
        }
    }
   
}


module.exports = TopicController;