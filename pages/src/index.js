import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import {
  LoginSuspense,
  RegisterSuspense,
  HomeSuspense,
  TablePageSuspense,
  TabPageSuspense,
  GridPageSuspense,
  InfiniteScrollPageSuspense,
  OopsSuspense,
  PrivacyPolicySuspense,
} from "./route/suspensePage";
// import Login from "./pages/Login"; //login 為單獨頁面時
import "@fortawesome/fontawesome-free/css/all.css";
import "./style/style.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {/* 登入頁面 */}
          {/* <Route path="/login" element={Login} /> */}
          {/* 內容 */}
          <Route path="/" element={<App />}>
            <Route path="home" element={<HomeSuspense />} />
            <Route path="tablePage" element={<TablePageSuspense />} />
            <Route path="tabPage" element={<TabPageSuspense />} />
            <Route
              path="infiniteScrollPage"
              element={InfiniteScrollPageSuspense}
            />
            <Route path="gridCardPage" element={<GridPageSuspense />} />
            <Route path="oops" element={<OopsSuspense />} />
            {/* 登入 */}
            <Route path="login" element={<LoginSuspense />} />
            <Route path="register" element={<RegisterSuspense />} />
            {/* 隱私權政策及網站安全政策 */}
            <Route path="privacyPolicy" element={<PrivacyPolicySuspense />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
