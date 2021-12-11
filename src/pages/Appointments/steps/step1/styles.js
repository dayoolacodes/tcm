import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  margin: 30px 45px;
  @media all and (max-width: 768px) {
    margin: 10px 25px;
    /* margin-top: 90px; */
  }
  .top-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .name-date {
      display: flex;
      @media all and (max-width: 768px) {
        align-items: center;
      }
      .initials {
        width: 47px;
        height: 47px;
        background: #d5ecfe;
        border-radius: 50%;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${COLORS.darkBlue};
      }

      div {
        .name {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 2.8rem;
          line-height: 36px;
          color: ${COLORS.darkBlue};
          margin-left: 2rem;
        }

        .date {
          background: #f2f6f8;
          border-radius: 4px;
          padding: 0.8rem 1.6rem;
          font-size: 1.4rem;
          color: ${COLORS.darkBlue};
          margin-left: 2rem;
          margin-right: 1rem;
          margin-top: 14px;
          height: 4rem;
          width: 19.5rem;
          span {
            opacity: 0.6;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      p {
        font-size: 12px;
        line-height: 18px;
        color: #7e8ea9;
        margin-top: 3.3rem;
        margin-right: 17px;
        @media all and (max-width: 568px) {
          width: 100%;
        }
      }
      .btn-wrap {
        button {
          display: inline-flex;
          align-items: center;
          background: ${COLORS.primary};
          border: 1px solid #066dc6;
          border-radius: 4px;
          color: ${COLORS.white};
          margin-right: 16px;
          padding: 1.2rem 4rem;
          margin-top: 1.2rem;
          height: 4rem;
          svg {
            margin-left: 12px;
          }
        }
      }
    }
  }
  .sec-row {
    /* border: 1px solid red; */
    /* max-height: 59.5rem; */
    /* width: 200px; */
    height: calc(100vh - 30.4rem);

    margin-top: 7rem;
  }
`;
