import React, { Suspense } from "react";
import Loader from "../components/Loader";
import {
  LoginLazy,
  RegisterLazy,
  HomeLazy,
  TablePageLazy,
  TabPageLazy,
  GridPageLazy,
  InfiniteScrollPageLazy,
  OopsLazy,
  PrivacyPolicyLazy
} from "./lazyPage";

// Suspense
export const LoginSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <LoginLazy />
      </Suspense>
  );
};
export const RegisterSuspense = () => {
  return (
      <Suspense fallback={<Loader/>}>
        <RegisterLazy />
      </Suspense>
  )
}
export const HomeSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <HomeLazy />
      </Suspense>
  );
};
export const TablePageSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <TablePageLazy />
      </Suspense>
  );
};
export const TabPageSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <TabPageLazy />
      </Suspense>
  );
};
export const GridPageSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <GridPageLazy />
      </Suspense>
  );
};
export const InfiniteScrollPageSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <InfiniteScrollPageLazy />
      </Suspense>
  );
};
export const OopsSuspense = () => {
  return (
      <Suspense fallback={<Loader />}>
        <OopsLazy />
      </Suspense>
  );
};
export const PrivacyPolicySuspense = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <PrivacyPolicyLazy />
    </Suspense>
  )
}