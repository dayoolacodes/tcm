import React from "react";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as ProfilePicIcon } from "assets/profilepicplaceholder.svg";
import navList from "routes/navList";
import { NavLink, useLocation } from "react-router-dom";
import COLORS from "styles/colors";
import { logout } from "lib/api/authRequests";

function Index({ profileName = "John Doe" }) {
  const { pathname } = useLocation();
  const activeStyle = {
    color: COLORS.white,
    fontWeight: 500,
    outline: 0,
    borderRadius: "4px",
    background: "#0785f3"
  };

  const handleLogout = e => {
    if (e.target.href.includes("log-out")) {
      logout();
      window.location.reload();
    }
  };
  return (
    <Container>
      <div className="logoWrapper">
        <Logo />
      </div>

      <div className="profilePic">
        <ProfilePicIcon />
        <span>{profileName}</span>
      </div>
      <div className="verticalLine" />
      {navList.map(({ section, title, path, logo: Logo }, i) => {
        return (
          section === "top" && (
            <NavLink
              to={path}
              className="sidebarNav"
              activeStyle={activeStyle}
              key={`navlink-${path}${i}`}
            >
              <Logo active={Boolean(pathname.includes(path))} />
              {title}
            </NavLink>
          )
        );
      })}
      <div className="verticalLine" />
      {navList.map(({ section, title, path, logo: Logo }, i) => {
        return (
          section === "bottom" && (
            <NavLink
              to={path}
              className="sidebarNav"
              activeStyle={activeStyle}
              key={`navlink-${path}${i}`}
              onClick={handleLogout}
            >
              <Logo active={Boolean(pathname.includes(path))} id={title} />
              {title}
            </NavLink>
          )
        );
      })}
    </Container>
  );
}

export default Index;
