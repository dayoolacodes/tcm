/* eslint-disable indent */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import COLORS from "styles/colors";
import { fontSize, respSize } from "utils/Dimension";

export const Container = styled.div`
  width: 100%;
  background-color: '${COLORS.white}';
  height: 100%;
  display: flex;
  flex-direction: column;


  &>*{
      outline:none;
  }
`;

// Mini header on top the table
export const ActionHeader = styled.div`
  width: 100%;
  padding: 19px 36px;
  padding-left: ${respSize(32)};
  padding-right: ${respSize(32)};
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: ${respSize(20)};
  background-color: #fbfbfb;

  button.text {
    display: inline-block;
    margin-left: ${respSize(11)};
    font-size: ${fontSize(13)};
    line-height: ${respSize(16)};
    font-weight: 600;
    color: ${COLORS.darkBlue};
  }
  @media screen and (max-width: 1200px) {
    & {
      grid-template-columns: 1fr;
      grid-gap: ${respSize(20)};
    }
    & button {
      width: 100%;
    }
  }
`;

export const DateWrapper = styled.div`
  label {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.darkMedium};
  }
  .hyphen {
    margin: 20px 10px 0 10px;
  }

  div.DayPickerInput {
    width: 100%;

    input {
      width: 100%;
      height: 40px;
      font-size: 1.4rem;
      text-indent: 1.3rem;
      border-radius: 0.4rem;
      margin: 10px 0;
      color: ${COLORS.darkMedium};
      transition: border-color 0.5s ease;
      background: #f2f6f8;

      &:focus {
        outline: none;
      }
      ::placeholder {
        color: ${COLORS.darkMedium};
      }
      :-moz-placeholder {
        color: ${COLORS.darkMedium};
      }
    }
  }
`;
export const TableWrapper = styled.div`
  width: 100%;
  padding-left: ${respSize(32)};
  padding-right: ${respSize(32)};
  overflow-x: auto;
  border: 1px solid #f3f3f6;
  border-radius: 4px;

  @media only screen and (max-width: 992px) {
    /* width: 100vw; */
  }

  table {
    width: 100%;
    border-collapse: collapse;
    color: ${COLORS.darkBlue};
    tbody tr {
      cursor: default;
      max-width: 200px;
    }
  }
  tr {
    white-space: nowrap;
  }
  tr:hover {
    background-color: #fafdfd;
    .hideBtn {
      visibility: visible;
    }
  }
  th {
    font-size: 14px;
    line-height: ${fontSize(16)};
    font-weight: 600;
    text-align: left;
    padding: ${respSize(16)} ${respSize(8)} !important;
    .sortIcon {
      display: inline;
      color: #acc1d1;
      width: ${respSize(16)};
      height: ${respSize(16)};
    }
    &.sortColumn {
      cursor: pointer;
    }
  }
  td {
    text-align: left;
    padding: ${respSize(16)} ${respSize(8)} !important;
    /* font-size: ${fontSize(14)}; */
    font-size: 1.4rem;
    line-height: ${fontSize(24)};
    vertical-align: middle;
    width: 10%;
    .wrap {
      background: rgba(196, 196, 196, 0.05);
      padding: 0px ${respSize(16)};
      border-radius: ${respSize(3)};
      border: 1px solid #ebebf2;
      display: inline-block;
    }
    .pLink {
      padding: ${respSize(5)} ${respSize(12)};
      border-radius: ${respSize(4)};
      border: 1px solid #acc1d1;
      display: inline-block;
      svg {
        display: inline-block;
        margin-right: 0.6rem;
      }
    }
    .capitalize {
      text-transform: capitalize;
    }
    .underline {
      text-decoration: underline;
      text-underline-offset: 2px;
      cursor: pointer;
    }
    .btn{
      background: #27AE60;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 6px 14px;
      border-radius: 4px;
      svg{
        margin: 0 8px;
      }
    }

    input[type="checkbox"] {
      -webkit-box-shadow: 0px 0px 0px 1px transparent;
      -moz-box-shadow: 0px 0px 0px 1px transparent;
      box-shadow: 0px 0px 0px 1px transparent;
      width: ${respSize(18)};
      height: ${respSize(18)};
      margin-bottom: -20px;
    }
    img {
      width: ${respSize(32)};
      height: ${respSize(32)};
      border-radius: ${respSize(4)};
    }
    .card_details {
      display: inline-flex;
      align-items: center;
      img {
        width: 24px;
        height: 8px;
        margin: 0 5px;

        &.master_card {
          height: 20px;
        }
      }
    }
  }
  td.center {
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    table {
      /* background-color: blue; */
      /* width: 1000px !important; */
      /* display: block; */
    }
    table tr {
      /* background-color: blue; */
      /* width: 1000px !important; */
      /* display: block; */
    }
  }
`;

export const QuickAction = styled.button`
  background-color: ${COLORS.white};
  border: 0.5px solid #ecf1f4;
  box-sizing: border-box;
  box-shadow: 0px 1.49618px 1.49618px rgba(45, 72, 117, 0.08);
  padding: ${respSize(4)};
  line-height: ${respSize(12)};
  border-radius: ${respSize(4)};
  margin-left: ${respSize(8)};
  visibility: hidden;
  position: relative;
  z-index: 50;
`;
export const StatusDot = styled.div`
  width: ${respSize(10)};
  height: ${respSize(10)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  background-clip: padding-box;
  margin-right: 10px;

  //When completed
  ${({ status }) =>
    (status === "completed" || status === true) &&
    css`
      border: 2px solid rgba(18, 179, 108, 0.5);
      background-color: rgba(18, 179, 108, 1);
    `}
    //cancelled
  ${({ status }) =>
    (status === "inactive" || status === "cancelled" || status === false) &&
    css`
      border: 2px solid rgba(252, 72, 63, 0.5);
      background-color: rgba(252, 72, 63, 1);
    `}
    //booked
  ${({ status }) =>
    status === "booked" &&
    css`
      border: 2px solid rgba(7, 133, 243, 0.5);
      background-color: rgba(7, 133, 243);
    `}
`;

// specific for orders status module
export const StatusDot2 = styled(StatusDot)`
  //When ready
  ${({ status }) =>
    status === "3" &&
    css`
      border: 2px solid rgba(18, 179, 108, 0.5);
      background-color: rgba(18, 179, 108, 1);
    `}

/* complete */
  ${({ status }) =>
    status === "6" &&
    css`
      border: 2px solid rgba(0, 128, 0, 0.5);
      background-color: rgba(0, 128, 0, 1);
    `}

    // pending & ready
    ${({ status }) =>
      (status === "1" || status === "5") &&
      css`
        border: 2px solid rgba(242, 201, 76, 0.5);
        background-color: rgba(242, 201, 76, 1);
      `}

  // abandoned & cancelled
  ${({ status }) =>
    (status === "4" || status === "7") &&
    css`
      border: 2px solid rgba(252, 72, 63, 0.5);
      background-color: rgba(252, 72, 63, 1);
    `}
`;

export const TableFooter = styled.div`
  width: 100%;
  text-align: right;
  margin-top: ${respSize(40)};
  margin-bottom: ${respSize(38)};
  padding-left: ${respSize(32)};
  padding-right: ${respSize(32)};
  & > * {
    margin-top: ${respSize(4)};
  }
  @media all and (max-width: 768px) {
    text-align: left;
    margin-top: ${respSize(4)};
    margin-bottom: ${respSize(3)};
    padding-left: ${respSize(3)};
    padding-right: ${respSize(3)};
  }
`;
export const TableFooterButton = styled.button`
  padding: ${respSize(7)} ${respSize(18)};
  border: 1px solid #ebebf2;
  font-size: ${fontSize(14)};
  line-height: ${fontSize(24)};
  color: ${COLORS.darkBlue};
  margin-left: ${respSize(8)};
  border-radius: ${respSize(2)};
  outline: none;
  background-color: ${({ current }) => current && "rgba(235,235,242, 0.5)"};
  &:disabled {
    cursor: not-allowed;
    color: #acc1d1;
  }
`;
export const FooterText = styled.span`
  font-size: ${fontSize(14)};
  line-height: ${fontSize(24)};
  color: ${COLORS.darkBlue};
  display: inline-block;
  margin-right: ${respSize(12)};
  margin-right: ${({ mr }) => mr && respSize(mr)};
  /* margin-right: ${respSize(36)}; */
   @media all and (max-width: 768px) {
    margin-right: ${respSize(1)};
  }
   @media all and (max-width: 350px) {
    width: 100%;
  }
`;
export const FooterSelectInput = styled.select`
  padding: ${respSize(7)} ${respSize(18)};
  border: 1px solid #ebebf2;
  font-size: ${fontSize(14)};
  line-height: ${fontSize(24)};
  color: ${COLORS.darkBlue};
  border-radius: ${respSize(2)};
  outline: none;
  font-weight: 700;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  padding-right: ${respSize(36)};
  margin-right: ${respSize(12)};
  @media all and (max-width: 768px) {
    padding-right: ${respSize(3)};
    margin-right: ${respSize(2)};
  }
`;
