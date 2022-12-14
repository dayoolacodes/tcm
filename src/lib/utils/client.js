import { getToken } from "./auth-utils";
import axios from "axios";
import doToast from "components/doToast/doToast";
import config from "config";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  async function(error) {
    // eslint-disable-next-line no-debugger
    // debugger;
    if (error.response?.status === 401) {
      // logout();
      if (!window.location.href.includes("login")) {
        doToast("Session time out", "error");
        // window.stop();
        setTimeout(() => window.location.reload(), 2000);
      }
    }
    // Reject promise if usual error
    if (error?.message === "Network Error") {
      doToast("Network Error", "error");
      return Promise.reject(error?.message);
    }

    return Promise.reject(error);
  }
);

export async function client(
  endpoint,
  { body, method, headers: customHeaders, ...customConfig } = {},
  signal
) {
  const token = getToken();

  const headers = {
    "Content-type": "application/json; charset=UTF-8"
  };

  // sets token header if one exists
  if (token) headers.Authorization = `Bearer ${token}`;
  // if (token) headers.Authorization = `Bearer ${"token"}`;
  const payload = { ...body };

  // populates axios param property with appropiate header and body

  /**YOU CAN OPTIONALLY PASS IN ADDITIONAL METHODS INTO THE HEADER 
   BJECT USING THE OPTIONL SECOND PARAMETER OBJECT **/

  const params = {
    method: method || (body ? "POST" : "GET"),
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders
    }
  };

  if (body) params.data = JSON.stringify(payload);

  let response;
  const axiosResponse = await axios(`${config.BASE_URL}/${endpoint}`, params, signal);
  const data = axiosResponse?.data;

  if (data?.data) {
    const { data: resolvedResponse } = data;
    response = resolvedResponse;
  } else {
    response = data;
  }

  return response;
}
