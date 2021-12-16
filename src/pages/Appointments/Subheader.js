import styled from "@emotion/styled";
import React, { useContext } from "react";
import COLORS from "styles/colors";
import { AppointmentContext } from ".";

function Subheader() {
  const { state, dispatch } = useContext(AppointmentContext);

  const breadCrumb = () => {
    switch (state?.view) {
      case "booked":
      case "completed":
      case "cancelled":
        return "> Details";
      case "step1":
        return;
      default:
        return `> ${state?.view.charAt(0).toUpperCase()}${state?.view.substring(1)}`;
    }
  };

  const btnText = () => {
    switch (state?.view) {
      case "booked":
      case "completed":
      case "cancelled":
        return "Back";
      case "step1":
        return;
      default:
        return "Cancel";
    }
  };

  return (
    <Container>
      <p className="desc">
        Appointments <span>{breadCrumb()}</span>{" "}
      </p>
      {state?.view !== "step1" && (
        <button onClick={() => dispatch({ type: "STEP1" })}>{btnText()}</button>
      )}
    </Container>
  );
}

export default Subheader;

const Container = styled.div`
  height: 64px;
  background: #fbfbfb;
  padding: 2.2rem 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: 1.5px solid #dbdee1;
    border-radius: 4px;
    padding: 1.2rem 2.4rem;
    color: #7e8ea9;
  }
  @media all and (max-width: 1024px) {
    display: none;
  }
  .desc {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${COLORS.primary};
  }
`;
