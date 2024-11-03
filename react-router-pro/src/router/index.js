import Login from "../page/Login/index";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id", // id 占位
    element: <Article />,
  },
  // 404页面路由
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
