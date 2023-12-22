import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Reviews from "@/pages/Reviews";
import Layout from "@/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact-me",
        element: <Contact />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
