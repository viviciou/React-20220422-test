import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOnScreen from "../../utils/useOnScreen";
import useWindowSize from "../../utils/useWindowSize";
// import Ajax from "../../utils/Ajax";
import Carousel from "../../components/Carousel";
import Counter from "../../components/Counter";
// getApiExample
import GetAPIExample from "../GetAPIExample";

const Home = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  const size = useWindowSize();
  const [carouselArray, setCarouselArray] = useState(imageArray);

  // Ajax頁面中引用
  // const getData = async () => {
  // 設定要帶入header內容
  // const someOptions = {
  // 	  method: protocol,
  // 	  headers: new Headers({
  // 	    token: token
  // 	  }),
  // 	  body: JSON.stringify(postData)
  // 	};
  // 帶入api所需參數
  // const dataParam = {
  //   url:'url',
  //   options: someOptions,
  //   time:5000
  // }
  // 	await Ajax(dataParam)
  // }

  const getImgDataArray = (data) => {
    setCarouselArray(data);
  };
  return (
    <Fragment>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {size.width}px / {size.height}px
      <div>
        <Carousel
          // isInfinity={true}
          // visibleAmount={4}
          isAutoplay={true}
          delay={10}
          dataArray={carouselArray}
          carouselPostWidth={size.width > 900 ? 400 : size.width}
          carouselPostMargin={40}
          getDataArray={getImgDataArray}
        />
      </div>
      {/* Get API Example */}
      <GetAPIExample />
      {/* react context api text */}
      <Counter />
      {/* useOnScreen example */}
      <div style={{ height: "100vh" }}></div>
      <div ref={ref}>{onScreen && "I'm on screen !"}</div>
      {/* 隱私權政策及網站安全政策 */}
      <Link to="privacyPolicy">隱私權政策及網站安全政策</Link>
    </Fragment>
  );
};
export default Home;

let imageArray = [
  {
    image: "https://picsum.photos/seed/picsum/1000/1000",
    title: "0-picsum",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/825/1000/1000",
    title: "01-825",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/1003/1000/1000",
    title: "02-1003",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/10/1000/1000",
    title: "03-10",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/100/1000/1000",
    title: "04-100",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/1023/1000/1000",
    title: "05-1023",
    desc: "by https://picsum.photos/images"
  },
  {
    image: "https://picsum.photos/id/104/1000/1000",
    title: "06-104",
    desc: "by https://picsum.photos/images"
  }
];
