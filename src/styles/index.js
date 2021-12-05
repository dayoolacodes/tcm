import { css } from "@emotion/react";

const size = {
  fold: "319px",
  mobile: "425px",
  tablet: "768px",
  laptop: "1025px",
  desktop: "1440px"
};

export const device = {
  fold: `(max-width: ${size.fold})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
    font-size: 50%;
    margin: 0;
    padding: 0;
    @media ${device.tablet} {
      font-size: 62.5%;
    }

    @media ${device.fold} {
      font-size: 50%;
    }
  }

  body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    min-height: 100%;
    font-family: "Poppins", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    outline: none;

    * ::-webkit-scrollbar-thumb {
      /* background: rgba(0,0,0,0.6) */
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-family: "Poppins", sans-serif !important;
      -webkit-font-smoothing: antialiased;
      outline: none;
      margin: 0;
      padding: 0;
    }
  }

  a {
    text-decoration: none !important;
    transition: color 0.5s;
  }

  ul {
    list-style-type: none;
  }

  button {
    transition: all 0.5s;
    :hover {
      transform: translateY(-3px);
    }
  }
`;

export default GlobalStyles;
