import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layout";
import { HomeScreen } from "../pages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
