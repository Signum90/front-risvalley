
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

import Dashboard from "../pages/dashboard/Dashboard"
import ControlEntity from "../pages/dashboard/controlEntitys/ControlEntity"

/* ---------------- load-data ---------------- */
import { uploadChallengers } from "../pages/innovation/upload"
import { uploadLibrary } from "../pages/library/upload"
import { uploadTeam } from "../pages/we/uploadTeam"

/* ---------------- Routes ---------------- */
import { PrivateRoutes, PublicRoutes } from "./routes"

/* ---------------- Guard Autentication ---------------- */
import AuthGuard from "../guards/auth.guard"

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
        path: PrivateRoutes.DASH_ENTITY,
        element: <ControlEntity />,
      },
    ]
  }
])
