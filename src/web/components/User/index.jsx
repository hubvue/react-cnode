import React, { Suspense } from "react";
import { useFetch } from "react-hooks-fetch";
import Topic from "../Topic/index"
import "./index.css";
import config from "../../utils/config";

const User = (props) => {
    let { error, data } = useFetch(`${config.url}/user/${props.match.params.name}`)
    if (error) {
        return "出错了";
    }
    if (!data) {
        return "此用户已删除";
    }
    console.log(data);
    return (
        <div className="user__container">
            <div className="topic__title user__title_color">{data.data.loginname}的主页</div>
            <div className="user__informance">
                <div className="informance__image">
                    <img src={data.data.avatar_url} alt=""/>
                    <span>{data.data.loginname}</span>
                </div>
                <div className="informance__score">{data.data.score}积分</div>
            </div>
            <div className=" user__topics">
                <div className="topic__title">最近创建的话题</div>
                {data.data.recent_topics.map(topic => <Topic key={topic.id} {...topic}/>)}
            </div>
            <div className=" user__topics">
                <div className="topic__title">最近参与的话题</div>
                {data.data.recent_replies.map(topic => <Topic key={topic.id} {...topic}/>)}
            </div>
        </div>
    )
};

export default (props) => (
    <Suspense fallback={<div className="loading">
        <div className="loading__inner"></div>
        <div className="loading__text">数据加载中...</div>
    </div>} >
        <User {...props} />
    </Suspense>
);