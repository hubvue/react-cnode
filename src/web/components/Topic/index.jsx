import React from "react";

import "./index.css";
const Topic = () => {
    return (
        <div className="topic__item">
            <a href="" className="item__image">
                <img src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt=""/>
            </a>
            <div className="item__num">
                <span>41</span>/
                <span>30913</span>
            </div>
            <div className="item_category">置顶</div>
            <p className="item__title">
                <a href="">
                    Node 12 值得关注的新特性
                </a>            
            </p>
            <p className="item__newreply">7小时前</p>
        </div>
    )
}

export default Topic;