import {
    GETASK,
    GETDETAIL,
    GETGOOD,
    GETJOB,
    GETSHARE,
    GETTOPICS,
    GETUSER,
    CHANGECATE,
} from "../constants/index";

const actionTopicFactory = (type) => {
    return (page,data) => {
        return {
            type,
            data,
            page
        }
    }
};

const actionAsk = actionTopicFactory(GETASK);
const actionDetail = actionTopicFactory(GETDETAIL);
const actionGood = actionTopicFactory(GETGOOD);
const actionJob = actionTopicFactory(GETJOB)
const actionShare = actionTopicFactory(GETSHARE);
const actionTopics = actionTopicFactory(GETTOPICS);
const actionUser = actionTopicFactory(GETUSER);

const actionChangeCate = (cate)=> {
    return {
        type: CHANGECATE,
        data:cate
    }
}
export {
    actionAsk,
    actionDetail,
    actionGood,
    actionJob,
    actionShare,
    actionTopics,
    actionUser,
    actionChangeCate
}