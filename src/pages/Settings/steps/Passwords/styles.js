import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  /* display: flex;
         flex-direction: column;
         align-items: center; */
  padding: 2rem;
  position: relative;

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
      button {
        white-space: nowrap;
        width: 138px;
        background: #27ae60;
        border: 1px solid #27ae60;
        padding: 1.2rem 3.2rem;
        border-radius: 4px;
        max-height: 40px;
        margin-top: 15px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
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
