import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const SignUp = lazy(() => import("pages/auth/SignUp"));
const Login = lazy(() => import("pages/auth/Login"));
const Appointments = lazy(() => import("pages/Appointments"));
const PatientInformation = lazy(() => import("pages/PatientInformation"));
const MedicalRecords = lazy(() => import("pages/MedicalRecords"));
const Settings = lazy(() => import("pages/Settings"));

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
    component: () => <Redirect to="/login" />
  },
  {
    path: "/appointments",
    exact: true,
    isPrivate: true,
    component: Appointments
  },
  {
    path: "/medical-records",
    exact: true,
    isPrivate: true,
    component: MedicalRecords
  },
  {
    path: "/patient-information",
    exact: true,
    isPrivate: true,
    component: PatientInformation
  },
  {
    path: "/settings",
    exact: true,
    isPrivate: true,
    component: Settings
  },
  {
    path: "*",
    exact: true,
    isPrivate: true,
    component: () => <Redirect to="/appointments" />
  }
];

export default routes;
