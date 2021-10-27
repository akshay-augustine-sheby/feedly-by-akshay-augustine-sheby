import React from "react"
import { Route, Switch } from "react-router"
import ArticlePage from "./ArticlePage/ArticlePage"
const Routes = () => {
    return(
        <div>
            <Switch>
                <Route path="/ArticlePage/:title" component={ArticlePage} />
            </Switch>
            
        </div>
    )
}
export default Routes;
