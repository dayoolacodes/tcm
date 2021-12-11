import React from "react";
import { Container } from "./style";
// import Subheader from "../../../pages/Appointments/Subheader";
import UserIcon from "./UserIcon";
import { ReactComponent as BellIcon } from "assets/bellIcon.svg";
import { ReactComponent as Logo } from "assets/logo-mobile.svg";
import { ReactComponent as MenuIcon } from "assets/menuIcon.svg";
import { useLocation } from "react-router-dom";
import navList from "routes/navList";

function Index() {
  const { pathname } = useLocation();
  //set title on top-bar
  const title = `${pathname?.includes("appointment") ? "Book" : ""} ${
    navList?.find(e => e?.path === pathname)?.title
  }`;

  return (
    <Container>
      <div className="topbar">
        <h2 className="title">{title}</h2>
        <div className="right-section">
          <BellIcon />
          <UserIcon />
        </div>
      </div>
      {/* <Subheader /> */}

      <div className="mobile-topbar">
        <Logo />
        <div className="menu-btn">
          <MenuIcon />
        </div>
      </div>
    </Container>
  );
}

export default Index;
