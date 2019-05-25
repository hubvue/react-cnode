import React, {useRef, useState,useEffect} from "react";
import "./index.css";

const PageDecive = ({pageNum,cate,dispathChain}) => {
    let btnRef = useRef(null);
    let [page,setPage] = useState(pageNum);
    console.log(typeof dispathChain);
    useEffect(()=> {
        if(page !== 1){
            console.log(typeof dispathChain);

            btnRef.current.removeAttribute('disabled');
        }else {
            btnRef.current.setAttribute("disabled","disabled");
        }
    },[page]);
    return (
        <div className="page__container">
            <button className="page__button page_left"  ref={btnRef} onClick={swtichPage('top',page,setPage,dispathChain)}>上一页</button>
            <button className="page__button page_right" onClick={swtichPage('bottom',page,setPage,dispathChain)}>下一页</button>
        </div>
    );
}
function swtichPage(dir,page,setPage,dispathChain){
    let nowPage;
    if(dir === 'top'){
        nowPage  = page-1;
    } else {
        nowPage = page + 1;
    }
    return () => {
        setPage(nowPage);
        dispathChain(nowPage);
    }
}
export default PageDecive;