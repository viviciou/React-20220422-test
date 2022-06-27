import React from "react";
import classnames from "classnames";
import Spinner from "../Spinner";
import "./loader.scss";

const Loader = ({ hasBackdrop }) => {
  const isBackdrop = classnames({
    backdrop: hasBackdrop === true
  });
  return (
    <div className={`loader ${isBackdrop}`}>
      <div className="loader-wrap">
        <Spinner />
      </div>
    </div>
  );
};
Loader.defaultProps = {
  hasBackdrop: true
};
export default Loader;
