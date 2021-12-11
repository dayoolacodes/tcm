import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  .logoWrapper {
    width: 100%;
    svg {
      margin-left: 6.9rem;
      margin-top: 4.6rem;
      cursor: pointer;

      @media all and (max-width: 768px) {
        width: 12.1rem;
        margin-left: 2.3rem;
        margin-top: 2rem;
      }
    }
  }

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

  .body {
    margin: 3.5rem 0;
    flex: 2;

    .header {
      text-align: center;
      .welcome-header {
        color: ${COLORS.primary};
        font-weight: 600;
        font-size: 2.4rem;
        /* line-height: 4.8rem; */
      }
      .welcome-desc {
        color: ${COLORS.primaryOrange};
        font-size: 1.4rem;
      }
    }

    .login-form {
      margin-top: 3.2rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 472px;
      padding: 0 10px;

      .forgot-password {
        font-size: 12px;
        line-height: 18px;
        text-align: right;
        width: 100%;
        display: inline-block;
        margin: 8px 0;
        color: ${COLORS.darkBlue};
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .login-btn {
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
        margin-top: 10.4rem;
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
    .redirect-signup {
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
    padding: 0 6rem;
    position: relative;
    flex: 1;
    overflow: hidden;
    @media all and (max-width: 768px) {
      display: none;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      /* position: relative; */
      width: 100%;
      .ellipse5 {
        position: absolute;
        left: -200px;
        filter: blur(8px);
        opacity: 0.7;
      }
      .copyright {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 16px;
        color: ${COLORS.grey};
        white-space: nowrap;
      }
    }
  }
`;
