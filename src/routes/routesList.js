import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const SignUp = lazy(() => import("pages/auth/SignUp"));
const Login = lazy(() => import("pages/auth/Login"));
const Home = lazy(() => import("pages/Home"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    exact: false,
    isPrivate: false,
    component: Login
  },
  {
    path: "/sign-up",
    exact: true,
    isPrivate: false,
    component: SignUp
  },
  {
    path: "*",
    exact: true,
    isPrivate: false,
    component: () => <Redirect to="/" />
  },
  {
    path: "/",
    exact: true,
    isPrivate: true,
    component: Home
  },
  {
    path: "*",
    exact: true,
    isPrivate: true,
    component: () => <Redirect to="/" />
  }
];

export default routes;
