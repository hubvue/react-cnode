import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class GoodIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: props.data,
        }
        props.data.length !== 0 ? this.setState({
            topics: props.data

        }) : fetch("http://127.0.0.1:8080/topics/good").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(data.data);
        })
    }

    render(){
        let topics = this.state.topics.map((topic,idx) => <Topic key={topic.id}  {...topic} type="精华"/> )
        return (
            <div className="content__topic">
                {topics}
            </div>
        )
    }
}

export default GoodIndex;