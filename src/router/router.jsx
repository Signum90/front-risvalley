
/* ---------------- react-router ---------------- */
import { createBrowserRouter } from "react-router-dom"

/* ---------------- Pages ---------------- */
import App from "../App"
import Library from "../pages/library/Library"
import Innovation from "../pages/innovation/Innovation"
import Service from "../pages/service/service"
import We from "../pages/we/we"
import Courses from "../pages/courses/Courses"
import Directory from "../pages/directory/Directory"
import Layout from "../components/Layout"
import NotFound from "../pages/404/NotFound"

/* ---------------- Dashboard Pages ---------------- */
import Dashboard from "../pages/dashboard/Dashboard";
import DashDirectory from "../pages/dashboard/directory/DashDirectory";
import DashEvents from "../pages/dashboard/events/DashEvents";
import DashInnovation from "../pages/dashboard/innovation/DashInnovation";
import DashRepository from "../pages/dashboard/repository/DashRepository";

/* ---------------- load-data ---------------- */
import { uploadChallengers } from "../pages/innovation/upload"
import { uploadLibrary } from "../pages/library/upload"
import { uploadTeam } from "../pages/we/uploadTeam"
import { uploadActors } from "../upload"

/* ---------------- Routes ---------------- */
import { PrivateRoutes, PublicRoutes } from "./routes"

/* ---------------- Guard Autentication ---------------- */
import AuthGuard from "../guards/auth.guard"
console.log('Ruta actual:', window.location.pathname);
/* ---------------- Router ---------------- */
export const router = createBrowserRouter([
  {
    path: PublicRoutes.HOME,
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <App />,
        loader: uploadActors,
      },
      {
        path: PublicRoutes.LIBRARY,
        element: <Library />,
        loader: uploadLibrary,
      },
      {
        path: PublicRoutes.INNOVATION,
        element: <Innovation />,
        loader: uploadChallengers
      },
      {
        path: PublicRoutes.SERVICE,
        element: <Service />,
      },
      {
        path: PublicRoutes.NOSOTROS,
        element: <We />,
        loader: uploadTeam
      },
      {
        path: PublicRoutes.DIRECTORY,
        element: <Directory />,
      },
      {
        path: PublicRoutes.COURSES,
        element: <Courses />,
      },
    ],
  },
  {
    path: PrivateRoutes.DASHBOARD,
    element: <AuthGuard />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: PrivateRoutes.DASH_DIRECTORY,
        element: <DashDirectory />,
      },
      {
        path: PrivateRoutes.DASH_EVENTS,
        element: <DashEvents />,
      },
      {
        path: PrivateRoutes.DASH_INNOVATION,
        element: <DashInnovation />,
      },
      {
        path: PrivateRoutes.DASH_REPOSITORY,
        element: <DashRepository />,
      },

    ]
  }
])
