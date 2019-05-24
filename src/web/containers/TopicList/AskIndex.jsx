import React from "react";
import {connect} from "react-redux";
import AskIndex from "../../components/TopicList/AskIndex";
import {
    actionAsk
} from "../../actions/index";
const mapStateToProps = (state,props) => {
    return {
        data: state.topicCategory.ask,
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        setData: (data) => {
            dispatch(actionAsk(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AskIndex);