import MinimalLayout from "components/templates/MinimalLayout";
import { Homepage } from "pages";
import Login from "pages/Login";

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
        id: "login",
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default Router;
