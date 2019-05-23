import React from "react";
import {connect} from "react-redux";
import TopicList from "../../components/TopicList/index";
import {
    actionDetail,
    actionGood,
    actionJob,
    actionShare,
    actionTask,
    actionTopics,
    actionUser
} from "../../actions/index";
const mapStateToProps = (state,props) => {
    return {
        state,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        setData: (type = 'all') => {

        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(TopicList);