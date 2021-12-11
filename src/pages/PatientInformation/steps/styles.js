import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  .wrapper {
    margin: 7rem auto;
    max-width: 474px;
    padding: 0 2rem;
    overflow-y: auto;
    .header {
      border-bottom: 1px solid rgba(172, 193, 209, 0.4);

      @media all and (max-width: 768px) {
        border-top: 1px solid rgba(172, 193, 209, 0.4);
      }
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
    .patient-info-form {
      .row {
        display: flex;
        align-items: center;

        @media all and (max-width: 360px) {
          flex-wrap: wrap;
        }
        .spacer {
          width: 30px;
          /* background: green; */
        }
      }

      .submit-btn {
        background: #0785f3;
        border: 1px solid #066dc6;
        border-radius: 4px;
        color: ${COLORS.white};
        padding: 12px 24px;
        margin-top: 4rem;
        float: right;
      }
    }
  }

  .section-divider {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
  }
`;
