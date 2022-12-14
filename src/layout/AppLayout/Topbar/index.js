import React from "react";
import { Container } from "./style";
import UserIcon from "./UserIcon";
import { ReactComponent as BellIcon } from "assets/bellIcon.svg";
import { ReactComponent as Logo } from "assets/logo-mobile.svg";
import { ReactComponent as MenuIcon } from "assets/menuIcon.svg";
import MobileMenu from "../MobileMenu";
import { useLocation } from "react-router-dom";
import navList from "routes/navList";
import { logout } from "lib/api/authRequests";

function Index() {
  const { pathname } = useLocation();
  //set title on top-bar
  const title = `${pathname?.includes("appointment") ? "Book" : ""} ${
    navList?.find(e => e?.path === pathname)?.title
  }`;
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowMenu = e => {
    setShowMenu(!showMenu);
    if (e?.target?.href?.includes("log-out")) {
      logout();
      window.location.reload();
    }
  };

  return (
    <Container>
      <MobileMenu showMenu={showMenu} handleShowMenu={handleShowMenu} />
      <div className="topbar">
        <h2 className="title">{title}</h2>
        <div className="right-section">
          <BellIcon />
          <UserIcon />
        </div>
      </div>

      <div className="mobile-topbar">
        <Logo />
        <div className="menu-btn" onClick={handleShowMenu}>
          <MenuIcon />
        </div>
      </div>
    </Container>
  );
}

export default Index;
