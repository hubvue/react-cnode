import React, { Suspense } from "react";
import { useFetch } from "react-hooks-fetch";
import Comment from "../Comment/index";
import _ from "../../utils/index";
import "./md.css";
import "./index.css";
const Acticle = (props) => {
    const { error, data } = useFetch(`http://127.0.0.1:8080/api/acticle/${props.match.params.id}`);
    if (error) {
        return "出错了";
    }
    if (!data) {
        return "此文章已删除";
    }
    return (
        <div className="acticle__container">
            <div className="acticle__informance">
                <header className="actitle__header">
                    <div className="actitle__title">
                        <span className="item_category">
                            {data.data.top ? "置顶" : _.cateChange(data.data.tab)}
                        </span>
                        <span>{data.data.title}</span>
                    </div>
                    <ul className="actitle__release">
                        <li>发布于 {_.newReplyTime(data.data.create_at)} </li>
                        <li> 作者 {data.data.loginname}</li>
                        <li>{data.data.visit_count} 次浏览</li>
                        <li>来自 {_.cateChange(data.data.tab)}</li>
                    </ul>

                </header>
                <div className="mark__text" dangerouslySetInnerHTML={{__html:data.data.content}}>
                </div>
            </div>
            <div className="reply__container">
                <div className="replay__num">{data.data.replies.length} 回复</div>
                <div className="replay__content">
                    {data.data.replies.map((replay,idx) => <Comment key={replay.id} {...replay} num={idx+1}/>)}
                </div>
            </div>
        </div>
    )
}

export default (props) => (
    <Suspense
        fallback={<div className="loading">
            <div className="loading__inner"></div>
            <div className="loading__text">数据加载中...</div>
        </div>}
    >
        <Acticle {...props} />
    </Suspense>
);