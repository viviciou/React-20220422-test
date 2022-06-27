import { lazy } from "@loadable/component";

export const LoginLazy = lazy(() => import("../pages/Login"));
export const RegisterLazy = lazy(() => import("../pages/Register"));
export const HomeLazy = lazy(() => import("../pages/Home"));
export const TablePageLazy = lazy(() => import("../pages/TablePage"));
export const TabPageLazy = lazy(() => import("../pages/TabPage"));
export const GridPageLazy = lazy(() => import("../pages/GridCardPage"));
export const InfiniteScrollPageLazy = lazy(() =>
  import("../pages/InfiniteScrollPage")
);
export const OopsLazy = lazy(() => import("../pages/Oops"));
export const PrivacyPolicyLazy = lazy(() => import("../utils/PrivacyPolicy"));