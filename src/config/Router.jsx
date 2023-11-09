import BasicLayout from "components/templates/BasicLayout";
import MinimalLayout from "components/templates/MinimalLayout";
import { Homepage, Loading } from "pages";
import Resume from "pages/Resume";
import Dashboard from "pages/admin/Dashboard";

const Router = [
  {
    id: "root",
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        id: "home",
        index: true,
        element: <Homepage />,
      },
      {
        id: "resume",
        path: "about-me",
        element: <Resume />,
      },
    ],
  },
  {
    path: "/admin",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "um",
        element: <>User Management</>,
      },
    ],
  },
];

export default Router;
