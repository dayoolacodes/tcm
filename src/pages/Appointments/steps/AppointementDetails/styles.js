import styled from "@emotion/styled";
import COLORS from "styles/colors";

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
    margin: 7rem auto;
    max-width: 626px;
    .row {
      margin: 2.5rem 3rem;
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
        @media all and (max-width: 360px) {
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
        margin-left: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        @media all and (max-width: 560px) {
          max-width: 25rem;
        }
        @media all and (max-width: 360px) {
          margin-left: 0;
        }
        div {
          margin-right: 5px;
        }
      }

      &.hLine {
        border-bottom: 1px solid #dbdee1;
      }
    }
  }

  textarea {
    background: rgba(243, 243, 243, 0.6);
    border-radius: 4px;
    outline: none !important;
    padding: 12px 16px;
    width: 38rem;
    height: 120px;
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
