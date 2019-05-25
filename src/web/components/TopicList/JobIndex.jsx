import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class JobIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: props.topics.data,
        }
        props.topics.data.length !== 0 ? this.setState({
            topics: props.data

        }) : fetch("http://127.0.0.1:8080/topics/job").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            props.setData(1,data.data);
        })
    }

    render(){
        let topics = this.state.topics.map((topic,idx) => <Topic key={topic.id}  {...topic} type="招聘"/> )
        return (
            <div className="content__topic">
                {topics}
            </div>
        )
    }
}

export default JobIndex;