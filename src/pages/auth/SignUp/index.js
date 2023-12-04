import React from "react";
import { Container } from "./styles";
import { ReactComponent as RemoteWorkMan } from "assets/man-and-system.svg";
import { ReactComponent as LadyDoc } from "assets/lady-doc.svg";
import { CheckboxInput, PasswordInput, TextInput } from "components/inputs";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Spinner } from "components/loaders";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { signUpValidation } from "utils/utils";
import Ellipse6 from "assets/Ellipse6.png";
import { useRegister } from "lib/queries/auth";
import doToast from "components/doToast/doToast";
import Copyright from "../Copyright";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  termsAgree: false
};

const SignUp = () => {
  const [mutate, { isLoading }] = useRegister();
  const handleSubmit = payload => {
    const data = {
      email: payload?.email?.trim(),
      password: payload?.password?.trim()
    };
    mutate(data, {
      onSuccess: () => {
        doToast("Sign-up in successfully", "success");
      },
      onError: error => {
        // network error has been handled already in client fn
        if (error !== "Network Error") {
          doToast(error?.response?.data?.error, "error");
        }
      }
    });
  };

  return (
    <Container>
      <div className="left-info-side">
        <p className="info-text">
          Book your medical appointments with <br /> ease today.
        </p>
        <div className="footer">
          <RemoteWorkMan />
          <LadyDoc />
        </div>
      </div>

      <div className="right-form-side">
        <div className="logoWrapper">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="sign-up-form">
          <div className="header">
            <p>Sign Up</p>
            <p className="desc">Join TCM Hotline today</p>
          </div>
          <div className="ellipse-wrapper">
            <img src={Ellipse6} alt="ellipse" className="ellipse6" />
          </div>
          <Formik initialValues={defaultValues} validate={signUpValidation} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    requiredtext={1}
                  />
                  <div className="passwords">
                    <PasswordInput
                      name="password"
                      label="Password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      requiredtext={1}
                    />
                    <span className="spacer" />
                    <PasswordInput
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      requiredtext={1}
                    />
                  </div>
                  <span>
                    <CheckboxInput
                      name="termsAgree"
                      requiredtext={1}
                      label={
                        <>
                          I agree to the <Link to="/sign-up">Terms</Link> and
                          <Link to="/sign-up">Privacy Policy</Link>
                        </>
                      }
                    />
                  </span>
                  <button type="submit" className="signUp-btn" disabled={isLoading}>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <span>
                        Sign Up <Arrow />
                      </span>
                    )}
                  </button>
                </form>
                <span className="redirect-login">
                  Already have an account? <Link to="/login">Log In here</Link>
                </span>
              </>
            )}
          </Formik>
        </div>
        <div className="footer">
          <Copyright />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
