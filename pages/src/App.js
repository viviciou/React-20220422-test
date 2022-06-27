import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNotifficationClose } from "./actions/NotifficationAction";
import RouteList from "./route";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import { NotifficationDefault } from "./components/Notiffication";


// https://jsonplaceholder.typicode.com/
export default function App() {
  const dispatch = useDispatch();
  const notifyMode = useSelector((state) => state.NotifficationReducer.mode);
  const isNotify = useSelector((state) => state.NotifficationReducer.active);
  const notifyTitle = useSelector((state) => state.NotifficationReducer.title);
  const notifyMessage = useSelector(
    (state) => state.NotifficationReducer.message
  );

  return (
    <div className="App">
      <Header />
      <main>
        <div className="wrap">
          {/* wrap */}
          {/* Routes Router */}
          <RouteList />
          {/* Routes Router End */}

          {/* Notiffication */}
          <NotifficationDefault
            mode={notifyMode}
            isActive={isNotify}
            title={notifyTitle}
            message={notifyMessage}
            closeEvent={() => {
              dispatch(handleNotifficationClose());
            }}
          />
          {/* Notiffication End */}
        </div>
      </main>
      <Footer />
      {/* goTop */}
      <GoTop />
    </div>
  );
}
