import React from "react"
import { Route, Switch } from "react-router"
import ArticlePage from "./ArticlePage/ArticlePage"
import Filter2 from "./Header/Filter2"
import LandingPage from "./Landing page"
const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Filter2} />
                <Route exact path="/ArticlePage/:title" component={ArticlePage} />
                <Route exact path="/LandingPage" component={LandingPage} />
            </Switch>
            
        </div>
    )
}
export default Routes;
