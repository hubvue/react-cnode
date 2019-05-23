import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/index";
import TopicList from "../TopicList/index";
class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="content">
                        <NavBar />
                        <Switch>
                            <Route exact path="/" render={() => <TopicList {...this.props.children} type="all" />} />
                            <Route path="/good" render={() => <TopicList  {...this.props.children} type="good" />} />
                            <Route path="/share" render={() => <TopicList  {...this.props.children} type="share" />} />
                            <Route path="/ask" render={() => <TopicList {...this.props.children} type="ask" />} />
                            <Route path="/job" render={() => <TopicList {...this.props.children} type="job" />} />
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