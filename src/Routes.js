import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage";

import history from './history';
import NewsPreview from "./Landing page/NewsPreview";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={NewsPreview} />
                    <Route path="/ArticlePage" component={ArticlePage} />
                </Switch>
            </Router>
        )
    }
}