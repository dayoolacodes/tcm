import { useState, useEffect } from "react";

const TOKEN = "fdvkhfvjdslfjndsjb .jkdsn.fkjn.jbk n.fsjkbn .jfdsn.jdsbglshdfv";

/**
 *
 * @param {String} url url string
 * @param {String} method request method(default is GET)
 * @returns data, error, pending
 */
const useFetch = (url, method = "GET", postBody = null, timeout = 5000) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //attaching extra to post request

  useEffect(() => {
    const abortCont = new AbortController();
    let extra = method === "GET" ? "" : { body: JSON.stringify(postBody) };

    setTimeout(() => {
      fetch(url, {
        method: method,
        signal: abortCont.signal,
        ...extra,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN
        }
      })
        .then(res => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then(data => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          console.log(url);

          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, timeout);

    // abort the fetch if screen is dead/inactive
    return () => abortCont.abort();
  }, [url, postBody, method, timeout]);

  return { data, isLoading, error };
};

export default useFetch;
