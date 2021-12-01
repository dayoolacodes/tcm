import config from "config";
import Cookies from "js-cookie";

function getValueFromCookie(value) {
  let result = null;
  const cookieResponse = Cookies.get(value);

  // to be configured when cookie is set

  if (cookieResponse) {
    result = cookieResponse;
    result = JSON.parse(result);

    return result;
  }

  return result;
}
/**
 *
 * @returns Access token
 */
function getToken() {
  return getValueFromCookie(config.TOKEN);
}
/**
 *
 * @returns Refresh Token
 */
function getRefreshToken() {
  return getValueFromCookie(config.REFRESH_TOKEN);
}

export { getToken, getRefreshToken };
