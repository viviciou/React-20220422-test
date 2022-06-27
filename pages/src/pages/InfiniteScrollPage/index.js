import React, { useRef } from "react";
import { imagesData } from "./utils";
// import { useIntersect } from "../../utils/useIntersect";
import Breadcrumb from "../../components/Breadcrumb";
import "./infiniteScroll.scss";

const InfiniteScrollPage = () => {
  const ref = useRef();
  const data = imagesData();

  // useEffect(() => {
  //   // 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊
  //   useIntersect(ref);
  // }, [ref]);

  return (
    <div ref={ref} className="infiniteScroll">
      <Breadcrumb />

      <h1>IntersectionObserver Demo</h1>
      <h2>InfiniteScroll(Masonry|Waterfall)</h2>
      <p>Try scrolling me!</p>
      <div className="target"></div>
      <div className="target"></div>
      <div className="block blue">First Section</div>
      <div className="block yellow">Second Section</div>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              style={{ width: "33%", display: "inline-block" }}
            >
              <img
                alt={item.id}
                src={item.url}
                title={item.license}
                width="213px"
                height="230px"
              />
            </div>
          );
        })}
    </div>
  );
};
export default InfiniteScrollPage;
