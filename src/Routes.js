import React from "react"
import { Route, Switch } from "react-router"
import ArticlePage from "./ArticlePage/ArticlePage"
const Routes = () => {
    return(
        <div>
            <Switch>
                <Route path="/ArticlePage/:url" exact>
                    <ArticlePage />
                </Route>
            </Switch>
            
        </div>
    )
}
export default Routes;
