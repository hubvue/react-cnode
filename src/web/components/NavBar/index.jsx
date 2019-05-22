import React,{Component} from "react";
import { Link } from "react-router-dom";


class NavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/">全部</Link></li>
                    <li><Link to="/good">精华</Link></li>
                    <li><Link to="/share">分享</Link></li>
                    <li><Link to="/ask">问答</Link></li>
                    <li><Link to="/job">招聘</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;