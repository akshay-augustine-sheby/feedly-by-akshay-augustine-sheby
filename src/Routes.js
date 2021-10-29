import React from "react"
import { Route, Switch } from "react-router"
import ArticlePage from "./ArticlePage/ArticlePage"
import FetchData from "./Landing page/FetchData"
import LandingPage from "./Landing page/LandingPage"

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={FetchData} />
                <Route exact path="/LandingPage" component={LandingPage} />
                
                <Route exact path="/ArticlePage/:title" component={ArticlePage} />
                
            </Switch>
            
        </div>
    )
}
export default Routes;
