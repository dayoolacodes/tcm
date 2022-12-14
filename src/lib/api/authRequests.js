import config from "config";
import Cookies from "js-cookie";
import { client } from "../utils/client";

async function login(payload) {
  const response = await client("api/login", { body: payload });
  if (response.token) {
    saveToken(response.token);
  }

  return response;
}

async function register(payload) {
  const response = await client("api/register", { body: payload });

  if (response.token) {
    saveToken(response.token);
  }

  return response;
}
/**
 *
 * @param {Obj} access access token obj{token, token_expires}
 * @param {obj} refresh same obj as access
 */
async function saveToken(token) {
  //-->Set access token
  Cookies.set(config.TOKEN, JSON.stringify(token), {
    expires: 1,
    secure: process.env.NODE_ENV !== "development"
  });
}

function logout() {
  Cookies.remove(config.TOKEN);
  localStorage.clear();
  sessionStorage.clear();
  return Promise.resolve();
}

export { login, register, logout, saveToken };
