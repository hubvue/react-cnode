import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class ShareIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: props.topics.data,
        }
        props.topics.data.length !== 0 ? this.setState({
            topics: props.data

        }) : fetch("http://127.0.0.1:8080/topics/share").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(0,data.data);
        })
    }

    render(){
        let topics = this.state.topics.map((topic,idx) => <Topic key={topic.id}  {...topic} type="分享"/> )
        return (
            <div className="content__topic">
                {topics}
            </div>
        )
    }
}

export default ShareIndex;