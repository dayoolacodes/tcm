import styled from "@emotion/styled";
import { Switch } from "@chakra-ui/react";

import colors from "styles/colors";

export const CustomSwitch = styled(Switch)`
  /* :focus {
    box-shadow: none !important;
  } */
  box-shadow: none !important;

  .css-1b2twv6[data-checked] {
    background: ${colors.green};
    box-shadow: none !important;
  }
`;
