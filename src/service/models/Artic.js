const SafeRequest = require("../utils/SafeRequest");
const safeRequest = new SafeRequest();

class Artic {
    constructor(){}
    /**
     * 通过主题文章ID获取主题文章详情
     * @param {*} id 
     */
    getDetail({id}){
        return safeRequest.fetch({
            url:`/topic/${id}`,
            method:'GET'
        })
    }
}
module.exports =  Artic;