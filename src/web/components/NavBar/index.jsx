import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./index.css"

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            cate: props.cate
        }
        this.changeAction = this.changeAction.bind(this);
    }
    changeAction(type) {
        return () => {
            this.props.setCate(type);
            this.setState({
                cate: type
            })
        }
    }
    render(){
        return (
            <nav className="content__nav">
                <ul className="content__nav__list">
                    <li className={this.state.cate === 'all' ? "nav__list__item nav__list__item_action" : "nav__list__item"}   onClick={this.changeAction("all")}><Link to="/cnode/">全部</Link></li>
                    <li className={this.state.cate === 'good' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("good")}><Link to="/cnode/good">精华</Link></li>
                    <li className={this.state.cate === 'share' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("share")}><Link to="/cnode/share">分享</Link></li>
                    <li className={this.state.cate === 'ask' ? "nav__list__item nav__list__item_action" : "nav__list__item"}onClick={this.changeAction("ask")}><Link to="/cnode/ask">问答</Link></li>
                    <li className={this.state.cate === 'job' ? "nav__list__item nav__list__item_action" : "nav__list__item"} onClick={this.changeAction("job")}><Link to="/cnode/job">招聘</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;