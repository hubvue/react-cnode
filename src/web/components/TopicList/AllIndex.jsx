import React, { Component, Suspense } from "react";
import Topic from "../Topic/index";
class AllIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: props.data,
        }
        props.data.length !== 0 ? void 0 : fetch("http://127.0.0.1:8080/topics").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(data.data);
        })
    }
    render() {

        let topics = this.state.topics.map((topic, idx) => <Topic key={topic.id}  {...topic} />)
        return (
            <div className="content__topic" topics={topics}>
                {topics}
            </div>
        )
    }
}

export default AllIndex;