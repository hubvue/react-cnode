import React, { Component } from "react";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../containers/NavBar";
import AllIndex from "../../containers/TopicList/AllIndex";
import AskIndex from "../../containers/TopicList/AskIndex"
import GoodIndex from "../../containers/TopicList/GoodIndex";
import JobIndex from "../../containers/TopicList/JobIndex";
import ShareIndex from "../../containers/TopicList/ShareIndex";
import User from "../User/index";
import Acticle from "../Acticle/index";
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.setPageToState = this.setPageToState.bind(this);
        this.state = {
            page: 0,
            cate:'all'
        }
    }
    setPageToState(){

    }
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="content">
                        <NavBar/>
                        <Switch>
                            <Route exact path="/"  component={AllIndex}/>
                            <Route path="/good" component={GoodIndex} />
                            <Route path="/share" component={ShareIndex} />
                            <Route path="/ask" component={AskIndex} />
                            <Route path="/job" component={JobIndex} />
                            <Route path="/user/:name" component={User}/>
                            <Route path="/acticle/:id" component={Acticle}/>
                        </Switch>
                    </div>
                </div>
                <div className="left"></div>
                <div className="right"></div>
            </main>
        )
    }
}
export default () => (
    <Router>
        <MainContainer />
    </Router>
);