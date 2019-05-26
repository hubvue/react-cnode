import React from "react";
import {Link} from "react-router-dom";
import _ from "../../utils/index";
import "./index.css";
const Topic = (props) => {
    return (
        <div className="topic__item">
            <Link to={"/cnode/user/" + props.author.loginname} className="item__image">
                <img src={props.author.avatar_url} alt={props.author.loginname} title={props.author.loginname}/>
            </Link>
            {props.reply_count || props.reply_count === 0 ? <div className="item__num">
                <span title="回复数">{props.reply_count}</span>/
                <span title="点击数">{props.visit_count}</span>
            </div> : "" }
           {props.tab ?  <div className={ props.type ? "item_category" : props.top ? "item_category" : "item_category item_category_usual" }>{props.type ? props.type : props.top? "置顶": _.cateChange(props.tab)}</div> : ""}
            <p className="item__title">
                <Link to={"/cnode/acticle/" + props.id}>
                    {props.title}
                </Link>            
            </p>
            <p className="item__newreply">{_.newReplyTime(props.last_reply_at)}</p>
        </div>
    )
}




export default Topic;