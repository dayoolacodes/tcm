import styled from "@emotion/styled";
import colors from "styles/colors";

export const AlertWrapper = styled.div`
  width: 100%;

  .chakra-alert {
    padding: 1rem;
    border-radius: 4px;
  }

  span {
    margin-left: 1.32rem;
    /* font-family: Inter; */
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${colors.primary};
  }
`;
