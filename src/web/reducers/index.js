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

        }
        case GETDETAIL : {
            
        }
        case GETGOOD : {
            
        }
        case GETJOB : {
            
        }
        case GETSHARE : {
            
        }
        case GETTOPICS : {
            
        }
        default:{
            return state;
        }
    }
}

export default reducer;