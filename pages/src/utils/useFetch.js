import { useState, useEffect } from "react";
// https://www.robinwieruch.de/react-hooks-fetch-data/
// https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E5%A6%82%E4%BD%95%E8%AE%93fetch%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%9C%89timeout%E6%95%88%E6%9E%9C/
export default function useFetch() {
  const [data, setData] = useState([]);
  const [{ url, options, time }, setOptions] = useState({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    options: {
      method: "GET", //protocol
      headers: new Headers({
        Accept: "*/*",
        "Content-Type": "application/json"
      })
      // body: JSON.stringify(postData)
    },
    time: 5000
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);
  const [errorMsg, setErrorMsg] = useState("something is wrong");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // 每當 url 改變，effect 要做的事
    const fetchData = async () => {
      const controller = new AbortController();
      setTimeout(() => {
        controller.abort();
      }, time);
      let config = { ...options, singnal: controller.singnal };

      setIsError(false);
      setIsLoaded(true);

      try {
        const result = await fetch(url, config).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setIsError(true);
            setErrorMsg(`error status ${response.status}`);
            return {};
          }
        });
        setData(result);

        setIsLoaded(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    };

    fetchData();

    // fetch(url,options)
    // .then(res => res.json())
    // .then(
    //     (result) => {
    //         setIsLoaded(true);
    //         setData(result);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (IsError) => {
    //         setIsLoaded(true);
    //         setIsError(IsError)
    //     }
    // )
  }, [url, options, time]);

  return [
    {
      data,
      isLoaded,
      isError,
      errorMsg
    },
    setOptions
  ];
}

useFetch.defaultProps = {
  url: ""
};
