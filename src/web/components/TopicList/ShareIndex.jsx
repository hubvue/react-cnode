import React,{Component,Suspense} from "react";
import Topic from "../Topic/index";
class ShareIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            topics: [],
        }
        this.props.data.length !== 0 ? this.setState({
            topics: this.props.data

        }) : fetch("http://127.0.0.1:8080/topics/share").then(res => res.json()).then(data => {
            this.setState({
                topics: data.data,
            });
            // this.props.setData('all', data.data);
            console.log(data.data);
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