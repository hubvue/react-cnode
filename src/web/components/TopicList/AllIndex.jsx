import React, { Component, Suspense } from "react";
import Topic from "../Topic/index";
import PageDevice from "../PageDevice/index";
import {
    actionTopics
}from "../../actions/index"
class AllIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: props.topics.data,
            pageNum: props.topics.page
        }
        props.topics.data.length !== 0 ? void 0 : fetch("http://127.0.0.1:8080/topics").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(1, data.data);
        });
        this.dispathChain = this.dispathChain.bind(this);
    }
    dispathChain(page){
        this.props.setData(function(){
            console.log(1);
            return (dispatch,getState) => {
                fetch(`http://127.0.0.1:8080/topics?page=${page}`).then(res=>res.json).then(data => {
                    dispatch(actionTopics(page,data.data));
                    console.log(getState().Topics);
                }) 
            }
        })
    }
    render() {
        return (
            <div>
                <div className="content__topic" >
                    {this.state.topics.map((topic, idx) => <Topic key={topic.id}  {...topic} />)}
                </div>
                <PageDevice 
                    cate="all"
                    pageNum={this.state.pageNum}
                    dispathChain={this.dispathChain}
                    />
            </div>
        )
    }
}

export default AllIndex;