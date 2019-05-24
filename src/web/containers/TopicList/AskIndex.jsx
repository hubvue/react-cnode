import React from "react";
import {connect} from "react-redux";
import AskIndex from "../../components/TopicList/AskIndex";
import {
    actionAsk
} from "../../actions/index";
const mapStateToProps = (state,props) => {
    return {
        topics: state.topicCategory.ask,
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        setData: (page, data) => {
            dispatch(actionAsk(page, data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AskIndex);