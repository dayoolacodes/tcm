import config from "config";
import Cookies from "js-cookie";
import { client } from "../utils/client";
import { getToken } from "../utils/auth-utils";

async function getUser() {
  const token = getToken();

  // if token does not exist don't bother making the request
  if (!token) return Promise.resolve(null);

  try {
    return await client("user/v1/auth");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

async function login(payload) {
  // const response = await client("user/v1/gateway/login", { body: payload });
  const response = await client("user/v1/gateway/login", { body: payload });

  if (response.tokens) {
    // figure out what to do with the refresh token later
    const { access, refresh } = response.tokens;
    saveToken(access, refresh);
  }

  return response;
}

async function register(payload) {
  const response = await client("user/v1/gateway/register", { body: payload });

  if (response.tokens) {
    const { access, refresh } = response.tokens;
    saveToken(access, refresh);
  }

  return response;
}
/**
 *
 * @param {Obj} access access token obj{token, token_expires}
 * @param {obj} refresh same obj as access
 */
async function saveToken(access, refresh) {
  //-->Set access token
  Cookies.set(config.TOKEN, JSON.stringify(access.token), {
    expires: 1,
    secure: process.env.NODE_ENV !== "development"
  });
  //-->Set refresh token
  Cookies.set(config.REFRESH_TOKEN, JSON.stringify(refresh.token), {
    expires: 5,
    secure: process.env.NODE_ENV !== "development"
  });
}

function logout() {
  Cookies.remove(config.TOKEN);
  Cookies.remove(config.REFRESH_TOKEN);
  Cookies.remove(config.LOGIN_REGISTER_ROUTE);
  // localStorage.clear();
  return Promise.resolve();
}

export { getUser, login, register, logout, saveToken };
