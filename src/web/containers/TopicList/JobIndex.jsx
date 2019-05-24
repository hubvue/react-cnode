import React from "react";
import {connect} from "react-redux";
import JobIndex from "../../components/TopicList/JobIndex";

import {
    actionJob
} from "../../actions/index";

const mapStateToProps = (state, props) => {
    return {
        topics: state.topicCategory.job,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setData: (page, data) => {
            dispatch(actionJob(page, data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobIndex);