import React, { Fragment, useState } from "react";
import useFetch from "../../utils/useFetch";

const GetAPIExample = () => {
  const [query, setQuery] = useState("1");
  const [{ data, isLoaded, isError, errorMsg }, doFetch] = useFetch();

  return (
    <Fragment>
      {isError && <div style={{ color: "red" }}>{errorMsg}</div>}
      {/* Search */}
      <form
        onSubmit={(event) => {
          doFetch({
            url: `https://jsonplaceholder.typicode.com/todos/${query}`,
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
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Result */}
      {isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h4>
            {data.title}[{data.completed ? "O" : "X"}]
          </h4>
          <div>
            id {data.id} | userId:{data.userId}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default GetAPIExample;
