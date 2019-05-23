import React,{Component} from "react";
import "./index.css";
import Topic from "../Topic/index";
class TopicList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let arr = [];
        arr.length = 40;
        let topics = [];
        for(let i = 0; i < arr.length; i ++) {
            topics.push(<Topic  key={i}/>)
        }
        return (
            <div className="content__topic">
                {topics}
            </div>
        )
    }
}

export default TopicList;