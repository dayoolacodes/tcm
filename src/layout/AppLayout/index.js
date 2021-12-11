import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Container } from "./styles";
import Ellipse6 from "assets/Ellipse6.png";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <div className="body">
        <Topbar />
        <div className="children">
          <img src={Ellipse6} alt="ellipse" className="ellipse6" />
          {children}
        </div>
      </div>
    </Container>
  );
};

export default AppLayout;
