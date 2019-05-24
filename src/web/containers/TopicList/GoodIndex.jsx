import React from "react";
import {connect} from "react-redux";

import GoodIndex from "../../components/TopicList/GoodIndex";

import {
    actionGood
}from "../../actions/index"

const mapStateToProps = (state,props) => {
    return {
        topics: state.topicCategory.good,
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        setData: (page, data) => {
            dispatch(actionGood(page, data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodIndex);