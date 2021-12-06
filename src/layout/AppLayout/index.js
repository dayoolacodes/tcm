import React from "react";
import Sidebar from "./Sidebar";
import { Container } from "./styles";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <div className="children">{children}</div>
    </Container>
  );
};

export default AppLayout;
