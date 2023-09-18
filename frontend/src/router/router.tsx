import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import Home from "../pages/Home.tsx";
import Transactions from "../pages/Transactions.tsx";
import Categories from "../pages/Categories.tsx";
import Auth from "../pages/Auth.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "transactions",
        element: <Transactions></Transactions>,
      },
      {
        path: "categories",
        element: <Categories></Categories>,
      },
      {
        path: "auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);
