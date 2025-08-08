import { lazy, Suspense } from "react";
import { Loading } from "pages";

const lazyLoad = (factory) => {
  const Component = lazy(factory);
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

const Router = [
  {
    id: "root",
    path: "/",
    element: lazyLoad(() => import("components/templates/MinimalLayout")),
    children: [
      {
        id: "home",
        index: true,
        element: lazyLoad(() => import("pages/Homepage")),
      },
      {
        id: "login",
        path: "login",
        element: lazyLoad(() => import("pages/Login")),
      },
    ],
  },
];

export default Router;
