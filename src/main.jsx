import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/app.scss";
import "bootstrap";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import Index from "./routes/Index";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
