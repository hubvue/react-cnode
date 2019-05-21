const Artic = require("../models/Artic");

class ArticController {
    constructor(){
        this.artic = new Artic();
    };
     /**
     * 文章详情
     */
    actionDetail() {
        return async ctx => {
            const {id} = ctx.params;
            if(id){
                let data = await this.artic.getDetail({
                    id,
                });
                ctx.body = data; 
            } else {
                ctx.body = "404";
            }
            
        }
    }
}
module.exports =  ArticController;