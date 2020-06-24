import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from 'Components/App';
import User from 'Components/User';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/user/:id">
        <User />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
