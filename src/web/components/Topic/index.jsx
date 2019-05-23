import React from "react";

import "./index.css";
const Topic = (props) => {
    return (
        <div className="topic__item">
            <a href={"/users/" + props.author.id} className="item__image">
                <img src={props.author.avatar_url} alt={props.author.loginname} title={props.author.loginname}/>
            </a>
            <div className="item__num">
                <span title="回复数">{props.reply_count}</span>/
                <span title="点击数">{props.visit_count}</span>
            </div>
            <div className="item_category">{props.top? "置顶": cateChange(props.tab)}</div>
            <p className="item__title">
                <a href={"/acticle/" + props.id}>
                    {props.title}
                </a>            
            </p>
            <p className="item__newreply">7小时前</p>
        </div>
    )
}

function cateChange(type){
    if(type === 'share'){
        return "分享"
    }
    if(type==="ask"){
        return "问答";
    }
    if(type ==="job"){
        return "招聘";
    }
}

export default Topic;