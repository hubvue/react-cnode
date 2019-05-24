import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class AskIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: [],
        }
        this.props.data.length !== 0 ? this.setState({
            topics: this.props.data

        }) : fetch("http://127.0.0.1:8080/topics/ask").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            // this.props.setData('all', data.data);
        })
    }

    render(){
        let topics = this.state.topics.map((topic,idx) => <Topic key={topic.id}  {...topic} type="问答"/> )
        return (
            <div className="content__topic">
                {topics}
            </div>
        )
    }
}

export default AskIndex;