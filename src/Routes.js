import React from "react"
import { Route, Switch } from "react-router"
import ArticlePage from "./ArticlePage/ArticlePage"
import LandingPage from "./Landing page/LandingPage"

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/ArticlePage/:title" component={ArticlePage} />
                <Route exact path="/LandingPage" component={LandingPage} />
                
            </Switch>
            
        </div>
    )
}
export default Routes;
