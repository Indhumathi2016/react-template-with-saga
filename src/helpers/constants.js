import React from "react";
import App from "components/App";
import User from "components/User";
export const routes = [
  {
    path: "/",
    exact: true,
    component: <App />
  },
  {
    path: "/users/:id",
    exact: false,
    component: <User />
  }
];
