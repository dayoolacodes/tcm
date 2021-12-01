import styled from "@emotion/styled";
import React from "react";
import COLORS from "styles/colors";

const CssLoading = () => {
  const Container = styled.div`
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 10rem;
      height: 3rem;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 1rem;
      /* transform: translate(50%, 50%); */
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${COLORS.primary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-of-type(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-of-type(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-of-type(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-of-type(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  `;

  return (
    <Container>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default CssLoading;
