import React from "react";
import {connect} from "react-redux";

import ShareIndex from "../../components/TopicList/ShareIndex";

import {
    actionShare
} from "../../actions/index";

const mapStateToProps = (state,props) => {
    return {
        data:state.topicCategory.share
    }
}

const mapDispatchToProps = (state, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareIndex);