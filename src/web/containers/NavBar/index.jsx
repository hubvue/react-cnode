import React from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar/index";
import {
    actionChangeCate
} from "../../actions/index";

const mapStateToProps = (state,props) => {
    return {
        cate: state.cate,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        setCate: (cate)=> {
            dispatch(actionChangeCate(cate));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);