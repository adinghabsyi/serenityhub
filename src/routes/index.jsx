import NotFound from "@/pages/not-found";
import {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";

const HomeClient = lazy(() => import("@/pages/home"));
const Bidan = lazy(() => import("@/pages/bidanku"));
const About = lazy(() => import("@/pages/About/About"));
import AllArticle from "./../pages/Article/AllArticle";
import DetailArticle from "@/pages/Article/DetailArticle";

// ----------------------------------------------------------------------

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  const HomePage = [
    {
      path: "/",
      element: <HomeClient />,
      index: true,
    },

    {
      path: "/all-articles",
      element: <AllArticle />,
      index: true,
    },
    {
      path: "/article/:id",
      element: <DetailArticle />,
      index: true,
    },
    {
      path: "tanya-dokter/bidanku",
      element: <Bidan />,
      index: true,
    },
    {
      path: "/about",
      element: <About />,
      index: true,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  const routes = useRoutes([...publicRoutes, ...HomePage]);

  return routes;
}
