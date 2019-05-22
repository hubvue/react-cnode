const fetch = require("node-fetch");
const config = require("../config/index");
const {URLSearchParams} = require("url");
const logHandle = require("../middlewares/LogHandle")();

/**
 * 
 * 用于后端接口的工具类
 */
class SafeRequest {
    constructor(){
        this.baseUrl = config.baseUrl;
    }
    fetch(options){
        let fetchRequest;
        if(options.method === 'GET'){
            fetchRequest = fetch(`${this.baseUrl}${options.url}${this._urlParams(options.params)}`)
        } else {
            fetchRequest = fetch(`${this.baseUrl}${options.url}`,{
                method: options.method,
                body: this._bodyParams(options.params),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        }
        return new Promise((resolve,reject) => {
            fetchRequest.then(res=> {
                return res.json();
            }).then(data => {
                resolve(data);
            }).catch(e=> {
                logHandle.error(e);
                reject("与后端接口异常");
            })
        }).catch(e=>e);
    }
    _bodyParams(options = {}){
        const param = new URLSearchParams();
        for(let key of options){
            param.append(key,options[key]);
        }
        return param;
    }
    _urlParams(options = {}){
        return Object.keys(options).reduce((url,param,idx,arr) => {
            url = idx === 0 ? url +`?${param}=${options[param]}`: url +`&${param}=${options[param]}`;
            return  url
        },'')
    }
}


module.exports = SafeRequest;