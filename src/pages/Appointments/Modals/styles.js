import styled from "@emotion/styled";
import COLORS from "styles/colors";
import { Button, ModalCloseButton } from "@chakra-ui/react";

export const VerticalBar = styled.div`
  width: 100%;
  height: 1px;
  background: #dbdee1;
  margin-top: 20px;
`;

export const Container = styled.div`
  /* .breadcrumb {
           position: relative;

           span {
             position: absolute;
             top: -115px;
             left: 140px;
             font-size: 14px;
             color: #0785f3;
             word-spacing: 5px;
             @media screen and (max-width: 1024px) {
               display: none;
             }
           }
         } */
  .wrapper {
    /* margin: 7rem auto; */
    max-width: 626px;
    margin: 0 auto;
    .row {
      margin: 2.5rem 0rem;
      /* display: flex; */

      @media all and (max-width: 560px) {
        margin: 1rem 2rem;
      }

      .key {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        margin-right: 0.8px;
        color: ${COLORS.grey};
        width: 15rem;
        text-align: right;
        display: inline-block;
        @media all and (max-width: 396px) {
          width: 100%;
          text-align: left;
        }
      }

      .value {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        color: #066dc6;
        margin-left: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        white-space: pre-wrap;
        @media all and (max-width: 560px) {
          max-width: 25rem;
        }
        @media all and (max-width: 396px) {
          margin-inline-start: 0;
        }

        .radio-group {
          display: flex;
          max-width: 420px;
          flex-wrap: wrap;
          color: #7e8ea9;
          background: #fff;
        }

        .radio-wrapper {
          margin: 5px;
          padding: 10px 2px;
          border-radius: 4px;
          width: 10rem;
          border: 1.5px solid #dbdee1;
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          &.active {
            background: ${COLORS.primaryBlue};
            color: #fff;
          }
          .css-1rggdzb,
          .css-1rggdzb {
            width: 15px;
            height: 15px;
          }
          .css-1rggdzb[aria-checked="true"],
          .css-1rggdzb[data-checked] {
            width: 15px;
            height: 15px;
            background: ${COLORS.white};
          }
        }
        :not(.radio) {
          margin-right: 15px;
        }
      }
    }
  }

  textarea {
    background: rgba(243, 243, 243, 0.6);
    border-radius: 4px;
    outline: none !important;
    padding: 12px 16px;
    width: 428px;
    height: 120px;
    @media all and (max-width: 768px) {
      max-width: 25rem;
    }
  }

  .btn-wrap {
    margin: 7rem 2rem;
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
    button {
      border: 1px solid #066dc6;
      padding: 12px 32px;
      border-radius: 4px;
      :first-of-type {
        margin-right: 14px;
        color: ${COLORS.primary};
      }
      :last-of-type {
        color: ${COLORS.white};
        background: ${COLORS.primary};
      }
    }
  }
`;

export const ModalButton = styled(Button)`
  font-weight: 500;
  padding: 15px 32px;
  outline: none;
  box-shadow: none !important;
  transform: unset;

  :first-of-type {
    background: #fff;
    border: 1px solid ${COLORS.primaryBlue};
    color: ${COLORS.primaryBlue};
  }
  :last-of-type {
    background: ${COLORS.primaryBlue};
    border: 1px solid ${COLORS.primaryBlue};
    color: ${COLORS.white};
  }

  &.bookAppointment {
    background: #27ae60;
    border: 1px solid #27ae60;
  }
`;
export const MdCloseButton = styled(ModalCloseButton)`
  margin: 10px;
  box-shadow: none !important;
  svg {
    color: ${COLORS.darkBlue};
    font-weight: 900;
  }
`;

export const ModalText = styled.div`
  color: ${COLORS.darkBlue};
  text-align: center;
  margin: 2rem 7rem;

  p {
    margin: 3rem 0;
  }
`;
