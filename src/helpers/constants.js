import React from "react";
import App from "components/App";
import User from "components/User";
import UserPost from 'components/UserPost';
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
  },
  {
    path: "/users/:userId/post/:postId",
    exact: false,
    component: <UserPost />
  }
];
