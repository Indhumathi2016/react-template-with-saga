import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import App from "Components/App";
import User from "Components/User";

const Routes = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/user">
                    <User/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
