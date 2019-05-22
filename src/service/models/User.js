const SafeRequest = require("../utils/SafeRequest");
const safeRequest = new SafeRequest();

class User {
    constructor(){}

    getUserDetail({id}){
        return safeRequest.fetch({
            url: `/user/${id}`,
            method:'GET',
        });
    }
}

module.exports = User;