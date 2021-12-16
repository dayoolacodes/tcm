import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import colors from "./colors";

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "1025px",
  xl: "1441px"
});

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "'Poppins', cursive, sans-serif",
    body: "'Poppins', sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.8rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  colors: {
    ...colors
  }
});

export default theme;
