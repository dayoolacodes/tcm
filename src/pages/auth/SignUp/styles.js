import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  @media all and (max-width: 768px) {
    background: ${COLORS.primary};
  }
  .left-info-side {
    background: ${COLORS.primary};
    max-width: 582px;
    display: flex;
    flex-direction: column;

    @media all and (max-width: 768px) {
      display: none;
    }
    .info-text {
      color: ${COLORS.white};
      font-weight: 600;
      font-size: 3.6rem;
      line-height: 5.7rem;
      margin-top: 13.9rem;
      margin-left: 5.9rem;
      margin-right: 11.4rem;
      flex: 2;
    }
    .footer {
      flex: 1;
      display: flex;
      align-items: baseline;
      justify-content: space-around;
    }
  }
  .right-form-side {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 768px) {
      background: ${COLORS.white};
      height: 100%;
      margin: 5.7rem 0.8rem;
      border-radius: 4px;
    }
    .logoWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 3.3rem;
      margin-bottom: 2.8rem;
    }

    .sign-up-form {
      flex: 20;

      .ellipse-wrapper {
        @media all and (max-width: 768px) {
          display: none;
        }
        img {
          position: absolute;
          &.ellipse6 {
            right: -15px;
            top: 0;
            filter: blur(8px);
          }
        }
      }
      .header {
        p {
          text-align: center;
          font-weight: 600;
          font-size: 2.4rem;
          color: ${COLORS.primary};

          &.desc {
            font-size: 1.4rem;
            line-height: 22px;
            color: ${COLORS.primaryOrange};
            font-style: normal;
            font-weight: normal;
            font-family: Inter, sans-serif;
          }
        }
      }
      form {
        margin-top: 3.2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 47.2rem;
        padding: 0 20px;

        .passwords {
          display: inline-flex;
          justify-content: space-around;
          .spacer {
            width: 50px;
            /* border: 1px solid red; */
          }
          @media all and (max-width: 768px) {
            display: block;
          }
        }

        .signUp-btn {
          background: ${COLORS.primary};
          color: #fcfefe;
          width: 100%;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 16px;
          padding: 1.2rem 0;
          margin-top: 8.2rem;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              margin: 0 1.65rem;
              width: 13px;
              height: 11.81px;
            }
          }

          :disabled {
            opacity: 0.5;
          }
        }
      }

      .redirect-login {
        color: ${COLORS.darkBlue};
        text-align: center;
        display: inline-block;
        width: 100%;
        margin-top: 0.8rem;
        margin-bottom: 3.2rem;
        a {
          color: ${COLORS.primary};
        }
      }
    }

    .footer {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 16px;
        color: #7e8ea9;
        white-space: nowrap;
        text-align: center;
      }
      @media all and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
