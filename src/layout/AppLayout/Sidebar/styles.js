import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  width: 240px;
  min-height: 100vh;
  background: #f3f3f6;
  .logoWrapper {
    margin: 17px 30px;
  }

  .profilePic {
    margin: 72px 62px 0;
    text-align: center;
    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      color: ${COLORS.primaryOrange};
      margin: 16px 0;
      display: inline-block;
    }
  }

  .verticalLine {
    border-bottom: 0.5px solid rgba(172, 193, 209, 0.4);
    width: 80%;
    margin: 49px auto;
  }

  .sidebarNav {
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: ${COLORS.darkBlue};
    width: 80%;
    margin: 8px auto;
    svg {
      margin-right: 15px;
      margin-left: 10px;
    }
  }
`;
