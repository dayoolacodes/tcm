import React from "react";
import { EmptyContainer } from "./styles";
import { ReactComponent as EmptyIcon } from "assets/skeleton.svg";

const index = ({ heading, description }) => {
  return (
    <EmptyContainer>
      <div>
        <EmptyIcon />
        <p className="header">{heading}</p>
        <p className="desc">{description}</p>
      </div>
    </EmptyContainer>
  );
};

export default index;
