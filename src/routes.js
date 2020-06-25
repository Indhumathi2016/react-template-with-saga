import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "helpers/constants";

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  </Router>
);

export default Routes;
