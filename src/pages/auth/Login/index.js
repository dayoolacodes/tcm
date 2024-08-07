import React from "react";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import { ReactComponent as Consulting } from "assets/consultant.svg";
import { ReactComponent as RemoteWorkMan } from "assets/man-and-system.svg";
import { Link } from "react-router-dom";
import { PasswordInput, TextInput } from "components/inputs";
import Ellipse5 from "assets/Ellipse5.png";
import Ellipse6 from "assets/Ellipse6.png";
import { Formik } from "formik";
import { loginValidation } from "utils/utils";
import { Spinner } from "components/loaders";
import { useLogin } from "lib/queries/auth";
import doToast from "components/doToast/doToast";
import Copyright from "../Copyright";
import config from "config";

const defaultValues = {
  email: "",
  password: ""
};

const Login = () => {
  const [mutate, { status }] = useLogin();
  const isLoading = status === "loading";

  function handleSubmit(payload) {
    const data = {
      email: payload?.email === "user" ? config.DUMMY_USER : payload?.email?.trim(),
      password: payload?.password?.trim()
    };
    mutate(data, {
      onSuccess: () => {
        doToast("Logged in successfully", "success");
      },
      onError: error => {
        // network error has been handled already in client fn
        if (error !== "Network Error") {
          doToast(error?.response?.data?.error, "error");
        }
      }
    });
  }

  return (
    <Container>
      <div className="logoWrapper">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="ellipse-wrapper">
        <img src={Ellipse6} alt="ellipse" className="ellipse6" />
      </div>
      <div className="body">
        <div className="header">
          <p className="welcome-header">Welcome Back</p>
          <p className="welcome-desc">Log in to pick up where you left off</p>
        </div>
        <Formik
          initialValues={defaultValues}
          validate={loginValidation}
          onSubmit={values => handleSubmit(values)}
        >
          {({ values, handleSubmit }) => (
            <>
              <form className="login-form" onSubmit={handleSubmit}>
                <TextInput
                  name="email"
                  label="Username / Email"
                  type="text"
                  placeholder="Enter your username"
                  requiredtext={1}
                />
                <PasswordInput
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  requiredtext={1}
                />
                <span className="forgot-password">
                  <Link to="/reset-password">Forgot your password?</Link>
                </span>
                <span className="notif">
                  username: user <br />
                  password: password{" "}
                </span>
                <button type="submit" className="login-btn" disabled={isLoading}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <span>
                      Log In <Arrow />
                    </span>
                  )}
                </button>
              </form>
              <span className="redirect-signup">
                Don’t have an account? <Link to="/sign-up">Sign up here</Link>
              </span>
            </>
          )}
        </Formik>
      </div>
      <div className="footer">
        <div>
          <img src={Ellipse5} alt="ellipse" className="ellipse5" />
          <RemoteWorkMan />
          <Copyright />
          <Consulting />
        </div>
      </div>
    </Container>
  );
};

export default Login;
