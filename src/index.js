import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/theme";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { AuthProvider } from "contexts/AuthContext";

/**
 * Setting up base for react-query
 */
const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: false,
      useErrorBoundary: false,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
