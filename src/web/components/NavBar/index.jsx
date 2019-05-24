import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./index.css"

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            action: "all"
        }
        this.changeAction = this.changeAction.bind(this);
    }
    changeAction(type) {
        return () => {
            this.setState({
                action: type
            })
        }
    }
    render(){
        console.log()
        return (
            <nav className="content__nav">
                <ul className="content__nav__list">
                    <li className={this.state.action === 'all' ? "nav__list__item nav__list__item_action" : "nav__list__item"}   onClick={this.changeAction("all")}><Link to="/">全部</Link></li>
                    <li className={this.state.action === 'good' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("good")}><Link to="/good">精华</Link></li>
                    <li className={this.state.action === 'share' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("share")}><Link to="/share">分享</Link></li>
                    <li className={this.state.action === 'ask' ? "nav__list__item nav__list__item_action" : "nav__list__item"}onClick={this.changeAction("ask")}><Link to="/ask">问答</Link></li>
                    <li className={this.state.action === 'job' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("job")}><Link to="/job">招聘</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;