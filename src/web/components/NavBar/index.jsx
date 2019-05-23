import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./index.css"

class NavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <nav className="content__nav">
                <ul className="content__nav__list">
                    <li className="nav__list__item nav__list__item_action"><Link to="/">全部</Link></li>
                    <li className="nav__list__item"><Link to="/good">精华</Link></li>
                    <li className="nav__list__item"><Link to="/share">分享</Link></li>
                    <li className="nav__list__item"><Link to="/ask">问答</Link></li>
                    <li className="nav__list__item"><Link to="/job">招聘</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;