import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./goTop.scss";

const GoTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  const showGoTopButton = classnames({
    active: showScroll === true
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    // componentWillUnmount()
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  return (
    <div className={`goTop ${showGoTopButton}`} onClick={scrollToTop}>
      <svg viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
      </svg>
    </div>
  );
};
export default GoTop;
