const config = {
  TOKEN: "__ACCESS_TOKEN__",
  REFRESH_TOKEN: "__REFRESH_TOKEN__",
  BASE_URL: process.env.REACT_APP_BASE_URL,
  DUMMY_USER: process.env.REACT_APP_DUMMY_USER,
  ENVIRONMENT: process.env.REACT_APP_NODE_ENV,
  TIME_OUT: Number(process.env.REACT_APP_IDLE_TIME)
};

export default config;
