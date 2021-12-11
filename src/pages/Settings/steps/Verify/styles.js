import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  /* display: flex;
         flex-direction: column;
         align-items: center; */
  padding: 2rem;
  position: relative;
  .verify-otp {
    margin: 0 auto;
    max-width: 434px;
    padding: 2.3rem 1.5rem;
    background: #f8f8f8;
    border: 1px solid #ecf1f4;
    display: flex;

    svg {
      margin: 3px;
    }
    .verify-otp-inner {
      margin-left: 8px;
      .header {
        color: #0785f3;
        display: flex;
        align-items: center;
      }
      .desc {
        font-size: 9px;
        display: flex;
        align-items: center;
        color: #2d4875;
        max-width: 401px;
        margin-top: 10px;
      }
      .input-code-row {
        display: flex;
        align-items: flex-end;
        input {
          background: #fff;
          max-height: 4rem;
        }
        .spacer {
          width: 50px;
        }
        button {
          white-space: nowrap;
          background: #0785f3;
          border: 1px solid #066dc6;
          border-radius: 4px;
          color: #fff;
          padding: 1.2rem 5rem;
          max-height: 4rem;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .wrapper {
    margin: 7rem auto;
    max-width: 434px;
    /* padding: 0 2rem; */
    .header {
      border-bottom: 1px solid rgba(172, 193, 209, 0.4);

      /* @media all and (max-width: 768px) {
               border-top: 1px solid rgba(172, 193, 209, 0.4);
             } */
      padding: 1.6rem 0;
      .title {
        font-weight: 600;
        font-size: 18px;
        color: ${COLORS.primary};
      }
      .subtitle {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #f7981d;
      }
    }
    form {
      display: flex;
      align-items: flex-end;

      @media all and (max-width: 560px) {
        flex-wrap: wrap;
      }
      .spacer {
        width: 30px;

        @media all and (max-width: 560px) {
          border: 1px solid #fff;
          flex: 5;
        }
      }
      button {
        white-space: nowrap;
        width: 138px;
        color: #0785f3;
        border: 1px solid #0785f3;
        padding: 1.2rem 3.2rem;
        border-radius: 4px;
        max-height: 40px;
        margin-top: 15px;
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
  }

  .section-divider {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
    margin: 6.4rem 0;
    position: absolute;
    left: 0;
  }
`;
