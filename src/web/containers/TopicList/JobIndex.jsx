import React from "react";
import {connect} from "react-redux";
import JobIndex from "../../components/TopicList/JobIndex";

import {
    actionJob
} from "../../actions/index";

const mapStateToProps = (state, props) => {
    return {
        topics: state.topicCategory.job,
        cate: state.cate
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setData: (page,data) => {
            if(typeof page === 'function'){
                dispatch(page);
            }else {
                dispatch(actionJob(page,data));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobIndex);