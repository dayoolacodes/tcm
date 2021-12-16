import React from "react";
import { NavLink } from "react-router-dom";
import navList from "routes/navList";
import { ReactComponent as CloseIcon } from "assets/menuCloseIcon.svg";

function index({ showMenu, handleShowMenu }) {
  return (
    <div className={`mobile-menu-list ${showMenu ? "show" : ""}`}>
      <div className="menu-close-btn" onClick={handleShowMenu}>
        <CloseIcon />
      </div>
      <div className="nav-section">
        {navList.map(({ section, title, path, logo: Logo }, i) => {
          return (
            section === "top" && (
              <NavLink to={path} key={`navlink-${path}${i}`} onClick={handleShowMenu}>
                <Logo />
                {title}
              </NavLink>
            )
          );
        })}
        <div className="divider" />
        {navList.map(({ section, title, path, logo: Logo }, i) => {
          return (
            section === "bottom" && (
              <NavLink to={path} key={`navlink-${path}${i}`} onClick={handleShowMenu}>
                <Logo />
                {title}
              </NavLink>
            )
          );
        })}
      </div>
    </div>
  );
}

export default index;
