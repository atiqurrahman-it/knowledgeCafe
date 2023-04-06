import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";
import Skills from "./component/Skills/Skills";
import Home from "./Home";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <div>This is about page </div>,
//   },
//   {
//     path: "/blog",
//     element: <Blog></Blog>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
        loader:()=>fetch('skills.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
