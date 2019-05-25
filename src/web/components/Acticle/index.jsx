import React, { Suspense } from "react";
import { useFetch } from "react-hooks-fetch";
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
    console.log(data);
    return (
        <div className="acticle__container">
            <div className="acticle__informance">
                <header className="actitle__header">
                    <div className="actitle__title">
                        <span className="item_category">置顶</span>
                        <span>服务器迁移至 aws 日本机房</span>
                    </div>
                    <ul className="actitle__release">
                        <li>发布于 7 个月前 </li>
                        <li> 作者 alsotang</li>
                        <li>56827 次浏览</li>
                        <li>来自 分享</li>
                    </ul>

                </header>
                <div className="mark__text" dangerouslySetInnerHTML={{__html:data.data.content}}>
                </div>
            </div>
            <div className="reply__container">

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