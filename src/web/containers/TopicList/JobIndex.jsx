import React from "react";
import {connect} from "react-redux";
import JobIndex from "../../components/TopicList/JobIndex";

import {
    actionJob
} from "../../actions/index";

const mapStateToProps = (state, props) => {
    return {
        data: state.topicCategory.job,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobIndex);