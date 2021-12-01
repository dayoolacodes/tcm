import React from "react";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import { ReactComponent as Consulting } from "assets/consultant.svg";
import { ReactComponent as RemoteWorkMan } from "assets/man-and-system.svg";
import { Link } from "react-router-dom";
import { Input } from "components/inputs";
import Ellipse5 from "assets/Ellipse5.png";
import Ellipse6 from "assets/Ellipse6.png";

const Login = () => {
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
        <form className="login-form">
          <Input label="Username" type="text" placeholder="Enter your username" />
          <Input label="Password" type="password" placeholder="Enter your password" />
          <span className="forgot-password">
            <Link to="/reset-password">Forgot your password?</Link>
          </span>
          <button type="submit" className="login-btn">
            Log In <Arrow />
          </button>
          <span className="signup">
            Don’t have an account? <Link to="/sign-up">Sign up here</Link>
          </span>
        </form>
      </div>
      <div className="footer">
        {/* <div style={{flexShrink: "0", border:"1px solid red"}}></div> */}
        <div>
          <img src={Ellipse5} alt="ellipse" className="ellipse5" />
          <RemoteWorkMan />
          <p className="copyright">Copyright © 2021 TCM Hotline all rights reserved</p>
          <Consulting />
        </div>
      </div>
    </Container>
  );
};

export default Login;
