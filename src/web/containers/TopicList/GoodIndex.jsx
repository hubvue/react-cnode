import React from "react";
import {connect} from "react-redux";

import GoodIndex from "../../components/TopicList/GoodIndex";

import {
    actionGood
}from "../../actions/index"

const mapStateToProps = (state,props) => {
    return {
        data: state.topicCategory.good,
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodIndex);