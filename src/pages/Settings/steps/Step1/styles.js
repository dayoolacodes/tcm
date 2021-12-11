import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  .wrapper {
    margin: 3rem 4.6rem;

    @media all and (max-width: 450px) {
      margin: 1rem;
    }
    .row {
      :last-of-type {
        margin-top: 1.6rem;

        @media all and (max-width: 768px) {
          margin-top: 0.5rem;
        }
      }
      border: 1px solid #f3f3f6;
      box-shadow: 0px 5px 20px rgba(45, 72, 117, 0.15);
      padding: 4.8rem 4.8rem;
      border-radius: 4px;
      display: flex;
      flex-wrap: wrap;
      position: relative;

      @media all and (max-width: 450px) {
        padding: 1rem;
      }
      .spacer {
        width: 30px;
      }
      .col {
        display: flex;
        height: 100%;
        flex: 9;
        min-width: 327px;
        @media all and (max-width: 350px) {
          flex-wrap: wrap;
          min-width: unset;
        }

        svg {
          width: 100%;
          height: auto;
          margin-top: 4.8rem;
          /* margin-left: 4.8rem; */
          height: 19rem;
          width: 19rem;
          @media all and (max-width: 390px) {
            margin-top: 2rem;
          }
        }

        .btn-n-pic-rules {
          margin-top: 8.7rem;
          margin-left: 2rem;
          display: flex;
          flex-direction: column;

          @media all and (max-width: 390px) {
            margin-top: 4rem;
          }

          button {
            border: 1.5px solid #0785f3;
            border-radius: 4px;
            padding: 1.2rem 4.8rem;
            color: #0785f3;
            white-space: nowrap;
            position: relative;
            input {
              opacity: 0;
              z-index: 2;
              position: relative;
              -moz-opacity: 0;
              filter: alpha(opacity= 0);
              width: 100%;
              /* margin: 8px auto; */
              position: absolute;
              left: 0;
            }
            input[type="file"],
            input[type="file"]::-webkit-file-upload-button {
              cursor: pointer;
            }
          }
          .rule {
            display: inline-flex;
            justify-content: center;
            font-size: 10px;
            color: #7e8ea9;
            margin-top: 1.6rem;
            flex-direction: column;

            span {
              display: flex;
            }
            svg {
              width: unset;
              height: unset;
              margin: unset;
              /* margin-top: 48px;
                     margin-right: 48px;
                      */
              margin-right: 1rem;
            }
          }
        }

        .settings-form {
          margin-top: 6rem;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .submit-btn {
            padding: 1.2rem 3.6rem;
            background: #27ae60;
            color: ${COLORS.white};
            border-radius: 4px;
            margin-top: 4.8rem;
            /* max-width: 16.9rem; */
            float: right;
            white-space: nowrap;
          }
        }
      }

      .notification {
        display: flex;
        align-items: center;
        width: 100%;
        background: #fff9eb;
        position: absolute;
        left: 0;
        top: 0;
        padding: 1rem 4rem;
        svg {
          margin-right: 1.5rem;
        }
        span {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 1.4rem;
          color: #2d4875;
        }
      }
      .verify-section {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;

        @media all and (max-width: 555px) {
          justify-content: flex-start;
        }
        .verify-col {
          max-width: 211px;
          text-align: center;
          color: #2d4875;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          padding-top: 4rem;

          @media all and (max-width: 555px) {
            padding-top: 7rem;
            display: unset;
            text-align: left;
            width: 100%;
          }
          @media all and (max-width: 285px) {
            padding-top: 15rem;
          }
          h1 {
            font-weight: 600;
            font-size: 1.6rem;
          }
          p {
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 1.2rem;
          }
          svg {
            margin-bottom: 2.7rem;
          }
          button {
            color: ${COLORS.white};
            background: ${COLORS.primaryBlue};
            border: 1px solid #066dc6;
            border-radius: 4px;
            padding: 1.2rem 3.2rem;
            margin-top: 4rem;
            white-space: nowrap;
            &.disabled {
              opacity: 0.5;
              transform: unset;
              /* pointer-events: none; */
            }
          }
        }
      }
    }
  }
`;
