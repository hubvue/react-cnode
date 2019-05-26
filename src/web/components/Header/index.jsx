import React from "react";
import "./index.css"

const Hander = () => {
    return (
        <header className="header">
            <div className="header__navBar">
                <div className="navBar__search">
                    <a href="/cnode">
                        <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
                        <span className="search_icon"></span>
                    </a>
                    <form action="" method="get">
                        <input type="text" />
                    </form>
                </div>
                <nav>
                    <ul className="navBar__nav">
                        <li><a href="/cnode" rel="noopener noreferrer">首页</a></li>
                        <li><a href="https://github.com/hubvue" rel="noopener noreferrer">关于</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Hander;