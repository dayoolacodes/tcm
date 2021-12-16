import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  padding: 3.2rem 4.7rem;

  @media all and (max-width: 768px) {
    padding: 3.2rem 1rem;
  }

  .form {
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: space-between;

    @media all and (max-width: 1024px) {
      flex-wrap: wrap;
      align-items: center;
    }

    .date-n-select {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 60%;
      @media all and (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
      }
      @media all and (max-width: 480px) {
        flex-wrap: wrap;
      }
    }
    input-wrap {
      margin: 200px;
      max-width: 224px;
      position: relative;
      margin-left: 290px;
    }

    button {
      background: ${COLORS.primaryBlue};
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1.2rem 2.4rem;
      border-radius: 4px;
      color: #fff;
      margin-left: 5px;
      float: inline-end;
      height: 40px;
      svg {
        margin-left: 10px;
      }
      @media all and (max-width: 480px) {
        margin-top: 15px;
      }
    }
  }
  .map-wrapper {
    border: 1px solid #d7dfe8;
    width: 100%;
    height: 60vh;
    margin-top: 24px;
    padding: 10px;
    border-radius: 4px;
  }
`;
