import React from "react";
import {connect} from "react-redux";
import TopicList from "../../components/TopicList/AllIndex";
import {
    actionTopics,
} from "../../actions/index";
const mapStateToProps = (state,props) => {
    return {
        topics: state.Topics,
        cate: state.cate,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        setData: (page,data) => {
            if(typeof page === 'function'){
                dispatch(page);
            }else {
                dispatch(actionTopics(page,data));
            }
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(TopicList);