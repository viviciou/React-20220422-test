import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { checkPageRole } from "../utils/checkPageRole";
import { menuList } from "../utils/menuList";

import {
  LoginSuspense,
  RegisterSuspense,
  HomeSuspense,
  TablePageSuspense,
  TabPageSuspense,
  GridPageSuspense,
  InfiniteScrollPageSuspense,
  OopsSuspense,
  PrivacyPolicySuspense
} from "./suspensePage";

const RouteList = () => {
  // 判斷使用者是否可以觀看此頁面
  const currentHash = window.location.pathname.replace("#", "");
  const checkRole = checkPageRole(menuList(), currentHash);

  if (checkRole) {
    return (
      <Routes>
        <Route path="/" element={<HomeSuspense />} />
        <Route path="login" element={<LoginSuspense />} />
        <Route path="register" element={<RegisterSuspense />} />
        <Route path="tablePage" element={<TablePageSuspense />} />
        <Route path="tabPage" element={<TabPageSuspense />} />
        <Route
          path="infiniteScrollPage"
          element={<InfiniteScrollPageSuspense />}
        />
        <Route path="gridCardPage" element={<GridPageSuspense />} />
        <Route path="privacyPolicy" element={<PrivacyPolicySuspense />} />
        <Route path="oops" element={<OopsSuspense />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/oops" />} />
      </Routes>
    );
  }
};
export default RouteList;
