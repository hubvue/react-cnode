import React from "react";
import {connect} from "react-redux";

import ShareIndex from "../../components/TopicList/ShareIndex";

import {
    actionShare
} from "../../actions/index";

const mapStateToProps = (state,props) => {
    return {
        topics:state.topicCategory.share,
        cate: state.cate
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setData: (page,data) => {
            if(typeof page === 'function'){
                dispatch(page);
            }else {
                dispatch(actionShare(page,data));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareIndex);