import React from "react";
import _ from "../../utils/index";
import "./index.css";
const Comment = (props) => {
    return (
        <div className="replay_c">
            <img src={props.author.avatar_url} alt={props.author.loginname} title={props.author.loginname}/>
            <div className="replay__box">
                <div className="replay__infor">
                    <span>{props.author.loginname}</span>
                    <a href={"#"+props.author_id}>{props.num}楼 · <span>{_.newReplyTime(props.create_at)}</span></a>
                </div>
                <div className="mark__text" dangerouslySetInnerHTML={{__html:props.content}}></div>
            </div>
            <div className="replay__count">
                <span>{props.ups.length}</span>
            </div>
        </div>
    );
}
export default Comment;