import NotFound from "@/pages/not-found";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const HomeClient = lazy(() => import("@/pages/home"));
const Bidan = lazy(() => import("@/pages/bidanku"));
import AllArticle from "./../pages/Article/AllArticle";
import DetailArticle from "@/pages/Article/DetailArticle";
import Dashboard from "@/pages/DashboardAdmin/Dashboard";
import NavbarAdmin from "@/components/common/NavbarAdmin/NavbarAdmin";
import path from "path";
import FormPatient from "@/pages/FormPatient";
import WaitingRoom from "@/pages/WaitingRoom/WaitingRoom";
import RoomChat from "@/pages/RoomChat";

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
      path: "tanya-dokter/bidanku/form-pasien",
      element: <FormPatient />,
      index: true,
    },
    {
      path: "tanya-dokter/bidanku/form-pasien/ruang-tunggu",
      element: <WaitingRoom />,
      index: true,
    },
    {
      path: "ruang-chat",
      element: <RoomChat />,
      index: true,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  const AdminPage = [
    {
      path: "/dashboard",
      element: (
        <>
          <NavbarAdmin />
          <Dashboard />
        </>
      ),
    },
  ];

  const routes = useRoutes([...publicRoutes, ...HomePage, ...AdminPage]);

  return routes;
}
