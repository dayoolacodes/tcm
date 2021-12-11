import styled from "@emotion/styled";
import React, { useContext } from "react";
import COLORS from "styles/colors";
import { AppointmentContext } from ".";

function Subheader() {
  const { state, dispatch } = useContext(AppointmentContext);
  return (
    <Container>
      <p className="desc">
        Appointments <span> {state?.view !== "step1" && "> Details"}</span>{" "}
      </p>
      {state?.view !== "step1" && <button onClick={() => dispatch({ type: "STEP1" })}>Back</button>}
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
