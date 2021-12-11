/* eslint-disable indent */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// import { colors } from "pages/auth/Forms/theme";
import { device } from "styles";
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
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.darkBlue};
  white-space: nowrap;
  span {
    font-size: ${fontSize(14)};
    line-height: ${respSize(24)};
  }
`;
export const VerticalDivider = styled.div`
  height: 25px;
  width: 1px;
  display: inline-block;
  background-color: #c8cfd9;
`;
//Header Texts
export const Text = styled.span`
  display: inline-block;
  margin-left: ${respSize(11)};
  font-size: ${fontSize(14)};
  line-height: ${respSize(24)};
  font-weight: ${respSize(600)};
  color: ${COLORS.darkBlue};
  .allTransactionText {
    @media all and (max-width: 767px) {
      display: none;
    }
  }
  .filterPop {
    border: none;
    border-radius: 32px;
    padding: 4px 12px;
    margin: 0 1px;
    background-color: ${COLORS.aliceBlue};
    display: flex;
    > svg {
      margin: 0.5rem;
      width: 1.5rem;
      cursor: pointer;
      @media all and (max-width: 768px) {
        margin: 0.15rem 0.5rem;
      }
    }
  }
`;
// input field on the header
export const InputWapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.white};
  padding-left: ${fontSize(18)};
  padding-right: ${fontSize(18)};
  border-radius: 2px;
  border: ${({ onChangeFocus }) =>
    onChangeFocus === true ? "1px solid rgba(45,72,117,0.3)" : "1px solid #EBEBF2"};
  .icon {
    display: inline-block;
    color: #d5d5d5;
    width: ${respSize(20)};
    height: ${respSize(20)};
  }
`;
export const Input = styled.input`
  display: inline-block;
  min-width: ${respSize(300)};
  background-color: ${COLORS.white};
  color: ${COLORS.darkBlue};
  font-size: ${fontSize(14)};
  padding: ${fontSize(8)} ${fontSize(14)};
  line-height: ${respSize(24)};
  flex: 1;
  border: none;
  &::placeholder {
    color: #d5d5d5;
    opacity: 1;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
//Action button at the top right
export const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.green};
  padding: ${respSize(10)} ${respSize(20)};
  border-radius: ${respSize(4)};
  color: ${COLORS.white};
  white-space: nowrap;
  width: 200px;

  @media only screen and (max-width: 992px) {
    margin: 0 auto;
  }
  .buttonIcon {
    margin-right: ${respSize(12)};
  }
  //for bigger icon
  .buttonIcon.big {
    font-size: ${respSize(20)};
  }
  span {
    font-size: ${fontSize(13)};
    line-height: ${fontSize(16)};
    font-weight: 600;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
 /* word-wrap: break-word; */
    /* display: none; */
    tbody tr {
      cursor: default;
      max-width: 200px;
    }
  }
  tr {
    /* border-bottom: 1px solid #ebebf2; */
    white-space: nowrap;
    /* background-color: blue; */
    /* align-items: center; */
    /* display: flex; */
  }
  tr:hover {
    background-color: #fafdfd;
    .hideBtn {
      visibility: visible;
    }
  }
  th {
    /* font-size: ${fontSize(14)}; */
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
  /* margin-left: -23px; */
  //When Active
  ${({ status }) =>
    (status === "active" ||
      status === "successful" ||
      status === "success" ||
      status === "accepted" ||
      status === "completed" ||
      status === "1" ||
      status === true) &&
    css`
      border: 2px solid rgba(18, 179, 108, 0.5);
      background-color: rgba(18, 179, 108, 1);
    `}
    //Inactive
  ${({ status }) =>
    (status === "inactive" ||
      status === "failed" ||
      status === "error" ||
      status === "rejected" ||
      status === "0" ||
      status === "cancelled" ||
      status === false) &&
    css`
      border: 2px solid rgba(252, 72, 63, 0.5);
      background-color: rgba(252, 72, 63, 1);
    `}
    //Expired
  ${({ status }) =>
    status === "expired" ||
    (status === "booked" &&
      css`
        border: 2px solid rgba(7, 133, 243, 0.5);
        background-color: rgba(7, 133, 243);
      `)}
    //Pending
  ${({ status }) =>
    (status === "pending" || status === "awaiting your feedback") &&
    css`
      border: 2px solid rgba(242, 201, 76, 0.5);
      background-color: rgba(242, 201, 76, 1);
    `}
  ${({ status }) =>
    (status === "attempt" || status === "select" || status === "processing") &&
    css`
      border-radius: unset;
      background-color: #ebebf2;
      height: 2px;
      width: 13px;
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

// specific for payment status module
export const StatusDot3 = styled(StatusDot)`
/* successful */
  ${({ status }) =>
    status === "2" &&
    css`
      border: 2px solid rgba(0, 128, 0, 0.5);
      background-color: rgba(0, 128, 0, 1);
    `}

    //notPaid
    ${({ status }) =>
      status === "1" &&
      css`
        border: 2px solid rgba(242, 201, 76, 0.5);
        background-color: rgba(242, 201, 76, 1);
      `}

  /* failed */
  ${({ status }) =>
    status === "3" &&
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

export const DrawerWrapper = styled.div`
  div {
    width: 100%;
    height: 63px;
    border-bottom: 1px solid #ebebf2;
  }
`;

export const MobileWrapper = styled.div`
  padding: ${respSize(32)};
  color: ${COLORS.darkBlue};
  div.wrapper {
    border-bottom: 1px solid #ebebf2;
    padding-bottom: 1.8rem;
    margin-top: 2.2rem;

    h2 {
      font-size: ${({ fontSz_14px }) => (fontSz_14px ? "14px" : `${fontSize(14)}`)};
      line-height: ${respSize(16)};
      font-weight: 600;
      margin-bottom: 1rem;

      @media screen and (max-width: 380px) {
        line-height: ${respSize(32)};
      }
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: ${({ fontSz_14px }) => (fontSz_14px ? "14px" : `${fontSize(14)}`)};
      line-height: ${respSize(24)};
      font-weight: 400;
      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        .dot {
          margin: 0;
          margin-right: 0.8rem;
        }
      }
      .right {
        color: #bdbdbd;
      }
    }
  }
`;

// orders page specific
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 1.6rem auto 0 auto;
  }

  @media ${device.mobile} {
    flex-direction: row;

    button {
      margin: unset;
      margin-left: 2rem;
    }
  }
`;
