/**
 *
 * @param {String} url url string
 * @param {String} method request method(default is GET)
 * @param {JSON} postBody post body
 * @returns data
 */
const TOKEN = "fdvkhfvjdslfjndsjb .jkdsn.fkjn.jbk n.fsjkbn .jfdsn.jdsbglshdfv";

const UseFetchRaw = async (url, method = "GET", postBody = "") => {
  let extra = method === "GET" ? "" : { body: JSON.stringify(postBody) };

  const res = await fetch(url, {
    ...extra,
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN
    }
  });
  return res.json();
};

export default UseFetchRaw;
