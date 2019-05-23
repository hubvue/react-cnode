import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class TopicList extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: [],
        }
        if(this.props.type === 'all'){
            console.log(this.props.state.Topics);
            this.props.state.Topics.length !==0 ? this.setState({
                topics: this.props.state.Topics
    
            }) : fetch("http://127.0.0.1:8080/topics").then(res=> res.json()).then(data => {
                    this.setState({
                        topics:data.data,
                    });
                    this.props.setData('all',data.data);
                })
            
        }
    }

    render(){
        let topics = this.state.topics.map((topic,idx) => <Topic key={topic.id}  {...topic}/> )
        return (
            <div className="content__topic" topics={topics}>
                {topics}
            </div>
        )
    }
}

export default TopicList;