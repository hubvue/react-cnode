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
    return (data) => {
        return {
            type,
            data,
        }
    }
};

const actionTask = actionFactory(GETASK);
const actionDetail = actionFactory(GETDETAIL);
const actionGood = actionFactory(GETGOOD);
const actionJob = actionFactory(GETJOB)
const actionShare = actionFactory(GETSHARE);
const actionTopics = actionFactory(GETTOPICS);
const actionUser = actionFactory(GETUSER);

export {
    actionTask,
    actionDetail,
    actionGood,
    actionJob,
    actionShare,
    actionTopics,
    actionUser
}