const User = require("../models/User");



class UserController {
    constructor(){
        this.user = new User();
    }
    actionUser(){
        return async ctx => {
            const {id} = ctx.params;
            if(id){
                let data = await this.user.getUserDetail({
                    id,
                });
                ctx.body= data;
            } else {
                ctx.body = {
                    success: false,
                    error_msg: "用户不存在",
                };
            }            
        }
    }
}

module.exports = UserController;