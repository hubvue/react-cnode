const SafeRequest = require("../utils/SafeRequest");
const safeRequest = new SafeRequest();
/**
 * Topic 主题Model
 */
class Topic {
    constructor(){}
    getTopics(params){
        return safeRequest.fetch({
            url: '/topics',
            method: 'GET',
            params: {
                ...params
            }
        })
    }
    getTopicAsk(params){
        return  safeRequest.fetch({
            url: '/topics',
            method: 'GET',
            params: {
                ...params,
                tab: 'ask'
            }
        });
    }
    getTopicShare(params){
        return  safeRequest.fetch({
            url: '/topics',
            method: 'GET',
            params: {
                ...params,
                tab: 'share'
            }
        });
    }
    getTopicJob(params){
        return  safeRequest.fetch({
            url: '/topics',
            method: 'GET',
            params: {
                ...params,
                tab: 'job'
            }
        });
    }
    getTopicGood(params){
        return  safeRequest.fetch({
            url: '/topics',
            method: 'GET',
            params: {
                ...params,
                tab: 'good'
            }
        });
    }
}
module.exports = Topic;