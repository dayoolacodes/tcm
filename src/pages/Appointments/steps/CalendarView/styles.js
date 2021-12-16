import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  padding: 3.2rem 4.7rem;

  @media all and (max-width: 1024px) {
    padding: 3.2rem 1rem;
  }

  .sub-select {
    @media all and (max-width: 1024px) {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  .subtitle {
    color: ${COLORS.primaryOrange};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    margin: 5px 0;
  }

  .select-wrapper {
    max-width: 472px;
  }

  .calander-wrapper {
    box-shadow: 4px 8px 24px #e2e2e9;
    margin-top: 24px;
    @media all and (max-width: 1400px) {
      margin-top: 84px;
    }
  }

  .rbc-calendar {
    border: 1px solid #fff;
    font-family: "Lato", sans-serif;
    position: relative;
    button {
      transform: unset;
      border-radius: 4px;
      border: none;

      :hover {
        background: transparent;
      }
    }
  }
  .rbc-toolbar .rbc-btn-group {
    background: #ffffff;
    border: 1px solid #f3f3f6;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 21px;
    outline: none;
    color: ${COLORS.primaryBlue};

    button {
      background: transparent;

      :hover {
        background: transparent;
      }
    }

    svg {
      margin: 0 10px;
    }
    @media all and (max-width: 1024px) {
      width: 341px;
      text-align: center;
    }
  }
  .rbc-btn-group-view {
    color: ${COLORS.primaryBlue};
    padding: 12px 15px;
    margin: 0 5px;

    @media all and (max-width: 1024px) {
      display: none;
    }
    &.active {
      background: ${COLORS.primaryBlue};
      color: #fff;
      :hover {
        background: ${COLORS.primaryBlue};
      }
    }
  }
  .rbc-day-bg {
    border: none;
    &.rbc-off-range-bg {
      background: inherit;
    }
  }
  .rbc-date-cell {
    text-align: center;
    font-size: 1rem;
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid rgb(248, 248, 248);
  }
  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid rgb(248, 248, 248);
  }
  .rbc-header {
    border-bottom: 0;
    color: #2d4875;
    opacity: 0.5;
    margin: 1.6rem 0;
  }
  .rbc-header + .rbc-header {
    border-left: 0;
  }
  .rbc-month-view {
    border: 0;
  }
  .rbc-date-cell.rbc-now {
    margin: 5px 0;
    a {
      background: #2d4875;
      width: 18px;
      height: 18px;
      color: ${COLORS.white};
      border-radius: 50%;
      padding: 3px;
      margin: 9px 0;
    }
  }

  .rbc-toolbar {
    position: absolute;
    top: -64px;
    right: 0;
    @media all and (max-width: 1024px) {
      position: relative;
    }
  }
`;
