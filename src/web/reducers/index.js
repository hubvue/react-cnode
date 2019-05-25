import {
    GETUSER,
    GETASK,
    GETDETAIL,
    GETGOOD,
    GETJOB,
    GETSHARE,
    GETTOPICS,
    CHANGECATE
} from "../constants/index";
import initial from "../store/data";



const reducer = (state = initial, action ) =>{
    switch(action.type){
        case GETUSER : {

        }
        case GETASK : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    ask:{
                        page:action.page,
                        data: action.data,
                    }
                })
            })
        }
        case GETDETAIL : {
            
        }
        case GETGOOD : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    good: {
                        page:action.page,
                        data: action.data,
                    }
                })
            })
        }
        case GETJOB : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    job: {
                        page:action.page,
                        data: action.data,
                    }
                })
            })
        }
        case GETSHARE : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    share: {
                        page:action.page,
                        data: action.data,
                    }
                })
            })
        }
        case GETTOPICS : {
            return Object.assign(state,{
                Topics:{
                    page: action.page,
                    data: action.data
                }
            })
        }
        case CHANGECATE: {
            return Object.assign(state,{
                cate:action.data
            })
        }
        default:{
            return state;
        }
    }
}

export default reducer;