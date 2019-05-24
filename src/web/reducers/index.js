import {
    GETUSER,
    GETASK,
    GETDETAIL,
    GETGOOD,
    GETJOB,
    GETSHARE,
    GETTOPICS
} from "../constants/index";


const initial = {
    users: [

    ],
    Topics: [

    ],
    topicCategory: {
        job: [

        ],
        good: [

        ],
        share: [

        ],
        ask: [

        ]
    },
    articlesDetails: {
        "5cbfd9aca86ae80ce64b3175" : {

        }
    }
};

const reducer = (state = initial, action ) =>{
    switch(action.type){
        case GETUSER : {

        }
        case GETASK : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    ask: action.data,
                })
            })
        }
        case GETDETAIL : {
            
        }
        case GETGOOD : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    good: action.data,
                })
            })
        }
        case GETJOB : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    job: action.data,
                })
            })
        }
        case GETSHARE : {
            return Object.assign(state, {
                topicCategory:Object.assign(state.topicCategory,{
                    share: action.data,
                })
            })
        }
        case GETTOPICS : {
            return Object.assign(state,{
                Topics:action.data
            })
        }
        default:{
            return state;
        }
    }
}

export default reducer;