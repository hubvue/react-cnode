import React, {useRef, useState,useEffect} from "react";
import "./index.css";

const PageDecive = ({pageNum,cate,setDate}) => {
    let btnRef = useRef(null);
    let {page,setPage} = useState(pageNum);

    useEffect(()=> {
        if(page !== 1){
            
        }
    },[page])
    return (
        <div className="page__container">
            <button className="page__button page_left" disabled="disabled" ref={btnRef}>上一页</button>
            <button className="page__button page_right">下一页</button>
        </div>
    );
}
export default PageDecive;