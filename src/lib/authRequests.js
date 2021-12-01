import config from "config";
import Cookies from "js-cookie";
import { client } from "./utils/client";
import { getToken } from "./utils/auth-utils";

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
  const response = await client("auth/login", { body: payload });

  if (response.tokens) {
    // figure out what to do with the refresh token later
    const { access } = response.tokens;

    await Cookies.set(config.TOKEN, JSON.stringify(access.token), {
      expires: 1,
      secure: process.env.NODE_ENV !== "development"
    });
  }

  return response;
}

async function register(payload) {
  const response = await client("auth/register", { body: payload });

  if (response.token) {
    const { access } = response.tokens;

    await Cookies.set(config.TOKEN, JSON.stringify(access.token), {
      expires: 1,
      secure: process.env.NODE_ENV !== "development"
    });
  }

  return response;
}

function logout() {
  Cookies.remove(config.TOKEN);
  Cookies.remove(config.REFRESH_TOKEN);
  return Promise.resolve();
}

export { getUser, login, register, logout };
