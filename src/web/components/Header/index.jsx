import React from "react";
import "./index.css"

const Hander = () => {
    return (
        <div className="header">
            <div className="header__navBar">
                <div className="navBar__search">
                    <a href="/">
                        <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                        <span className="search_icon"></span>
                    </a>
                    <form action="" method="get">
                        <input type="text"/>
                    </form>
                </div>
                <ul className="navBar__nav">
                    nav
                </ul>
            </div>
        </div>
    )
}

export default Hander;