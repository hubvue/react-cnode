import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../containers/NavBar";
import AllIndex from "../../containers/TopicList/AllIndex";
import AskIndex from "../../containers/TopicList/AskIndex"
import GoodIndex from "../../containers/TopicList/GoodIndex";
import JobIndex from "../../containers/TopicList/JobIndex";
import ShareIndex from "../../containers/TopicList/ShareIndex";
class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="content">
                        <NavBar/>
                        <Switch>
                            <Route exact path="/"  component={AllIndex} />
                            <Route path="/good" component={GoodIndex} />
                            <Route path="/share" component={ShareIndex} />
                            <Route path="/ask" component={AskIndex} />
                            <Route path="/job" component={JobIndex} />
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