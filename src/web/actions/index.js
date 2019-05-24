import {
    GETASK,
    GETDETAIL,
    GETGOOD,
    GETJOB,
    GETSHARE,
    GETTOPICS,
    GETUSER
} from "../constants/index";

const actionFactory = (type) => {
    return (page,data) => {
        return {
            type,
            data,
            page
        }
    }
};

const actionAsk = actionFactory(GETASK);
const actionDetail = actionFactory(GETDETAIL);
const actionGood = actionFactory(GETGOOD);
const actionJob = actionFactory(GETJOB)
const actionShare = actionFactory(GETSHARE);
const actionTopics = actionFactory(GETTOPICS);
const actionUser = actionFactory(GETUSER);

export {
    actionAsk,
    actionDetail,
    actionGood,
    actionJob,
    actionShare,
    actionTopics,
    actionUser
}