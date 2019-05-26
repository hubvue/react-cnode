import React, { Component, Suspense } from "react";
import Topic from "../Topic/index";
import PageDevice from "../PageDevice/index";
import {
    actionTopics
} from "../../actions/index"
import config from "../../utils/config";
import "./index.css";

class AllIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: props.topics.data,
            pageNum: props.topics.page
        }
        props.topics.data.length !== 0 ? void 0 : fetch(`${config.url}/topics`).then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(1, data.data);
        });
        this.dispathChain = this.dispathChain.bind(this);
    }
    dispathChain(page) {
        this.props.setData((dispatch, getState) => {
            fetch(`${config.url}/topics?page=${page}`).then(res => res.json()).then(data => {
                document.documentElement.scrollTop=0;
                dispatch(actionTopics(page, data.data));
                let Topics = getState().Topics;
                this.setState({
                    topics:Topics.data,
                    page:Topics.page
                })
            })
        })
    }
    render() {
        return (
            <div className="content__container">
                <div className="content__topic" >
                    {this.state.topics.map((topic, idx) => <Topic key={topic.id}  {...topic} />)}
                </div>
                <PageDevice
                    pageNum={this.state.pageNum}
                    dispathChain={this.dispathChain}
                />
            </div>
        )
    }
}

export default AllIndex;