import React from "react";
import { Container } from "./styles";
import { ReactComponent as RemoteWorkMan } from "assets/man-and-system.svg";
import { ReactComponent as LadyDoc } from "assets/lady-doc.svg";
import { CheckboxInput, TextInput } from "components/inputs";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Spinner } from "components/loaders";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { signUpValidation } from "utils/utils";
import Ellipse6 from "assets/Ellipse6.png";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  termsAgree: false
};

const SignUp = () => {
  const handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 1500);
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
          <Formik
            initialValues={defaultValues}
            validate={signUpValidation}
            onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
          >
            {({ isSubmitting, errors, values, handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <div className="passwords">
                    <TextInput
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Create a password"
                    />
                    <span className="spacer" />
                    <TextInput
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      placeholder="Confirm password"
                    />
                  </div>
                  <span>
                    <CheckboxInput
                      name="termsAgree"
                      label={
                        <>
                          I agree to the <Link to="/terms">Terms</Link> and
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </>
                      }
                    />
                  </span>
                  <button type="submit" className="signUp-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
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
          <p className="copyright">Copyright ?? 2021 TCM Hotline all rights reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
