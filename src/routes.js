import React from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { routes } from "helpers/constants";

const Routes = ({url}) => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route exact path={`${route.path}`} key={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  </Router>
);

export default Routes;
