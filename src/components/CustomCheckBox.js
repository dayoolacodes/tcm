import styled from "@emotion/styled";
import React from "react";
import { AiOutlineCheck, AiOutlineMinus } from "react-icons/ai";

export default function CustomCheckBox({ check, checkWidth, checkHeight, onClick, icon }) {
  return (
    <Container onClick={onClick}>
      <div
        style={{
          backgroundColor: check ? "#27AE60" : "transparent",
          borderColor: check ? "#27AE60" : "#4B688D",
          width: checkWidth ?? "2rem",
          height: checkHeight ?? "2rem"
        }}
        className="checkWrapper"
      >
        {icon === "dash" ? (
          <>
            {check && (
              <AiOutlineMinus className={"check"} name={"check"} color={"#fff"} size={16} />
            )}
          </>
        ) : (
          <>
            {check && (
              <AiOutlineCheck className={"check"} name={"check"} color={"#fff"} size={16} />
            )}
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: "row";
  align-items: "center";
  justify-content: "center";
  cursor: pointer;

  .checkWrapper {
    height: 2rem;
    width: 2rem;
    border-width: 1px;
    border-style: solid;
    background-color: red;
    border-radius: 0.1rem;
    position: relative;
    .check {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .title {
    margin-left: 0.6rem;
    font-family: "Inter-Regular";
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
