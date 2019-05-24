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
            <div className={ props.type ? "item_category" : props.top ? "item_category" : "item_category item_category_usual" }>{props.type ? props.type : props.top? "置顶": cateChange(props.tab)}</div>
            <p className="item__title">
                <a href={"/acticle/" + props.id}>
                    {props.title}
                </a>            
            </p>
            <p className="item__newreply">{newReplyTime(props.create_at)}</p>
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

function newReplyTime(replyTime) {
    let [Y,M,D] = replyTime.split("T")[0].split("-");
    let [h,m,s] = replyTime.split('T')[1].split('.')[0].split(":");
    let targetTime = new Date(`${Y}-${M}-${D} ${h}:${m}:${s}`);
    let nowTime = new Date();
    let time = nowTime - targetTime;
    if(time < 60000) {
        return "1分钟内";
    }
    let numm = Math.floor(time/600000);
    if(numm < 60) {
        return `${numm}分钟内`;
    }
    let numh = Math.floor(time/3600000);
    if(numh < 24){
        return `${numh}小时内`;
    }
    let numD = Math.floor(time/86400000);
    if(numD < 30){
        return `${numD}天内`
    }
    return "1年内";
}

export default Topic;