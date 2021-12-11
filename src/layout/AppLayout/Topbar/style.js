import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  .topbar {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    /* position: fixed; */
    @media all and (max-width: 1024px) {
      display: none;
    }
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 20px;
      color: ${COLORS.primary};
    }

    .right-section {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .user-icon-wrapper {
        display: flex;
        margin-left: 20px;
        align-items: center;
        .user-initials {
          background: #d0fcd2;
          color: #19d16e;
          padding: 8px 7px;
          border-radius: 50%;
          width: 31px;
          height: 31px;
          font-weight: 500;
          font-size: 10.5px;
          line-height: 10px;
          text-align: center;
        }
        svg {
          font-size: 2rem;
          color: ${COLORS.darkBlue};
        }
      }
    }
  }
  .mobile-topbar {
    display: none;

    svg {
      cursor: pointer;
    }
    .menu-btn {
    }
    @media all and (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4rem 2.2rem;
      position: fixed;
      background: ${COLORS.white};
      width: 100%;
      height: 64px;
      z-index: 4;
      border-bottom: 1px solid #dbdee1;
    }
  }
`;
