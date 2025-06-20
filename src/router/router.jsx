
/* ---------------- react-router ---------------- */
import { createBrowserRouter } from "react-router-dom"

/* ---------------- Pages ---------------- */
import App from "../App"
import Library from "../pages/library/Library"
import Innovation from "../pages/innovation/Innovation"
import Service from "../pages/service/service"
import AboutUs from "../pages/about/AboutUs"
import Courses from "../pages/courses/Courses"
import Directory from "../pages/directory/Directory"
import NotFound from "../pages/404/NotFound"
import Contact from "../pages/contact/Contact"
import Questions from "../pages/questions/Questions"

/* ---------------- Dashboard Pages ---------------- */
import Dashboard from "../pages/dashboard/home/Dashboard"
import DashDirectory from "../pages/dashboard/directory/DashDirectory"
import DashEvents from "../pages/dashboard/events/DashEvents"
import DashInnovation from "../pages/dashboard/innovation/DashInnovation"
import DashRepository from "../pages/dashboard/repository/DashRepository"
import DashUsers from "../pages/dashboard/users/DashUsers"

/* ---------------- load-data ---------------- */
import { uploadChallengers } from "../pages/innovation/upload"
import { uploadLibrary } from "../pages/library/upload"
import { uploadTeam } from "../pages/about/uploadTeam"
import { uploadActors } from "../upload"

/* ---------------- Routes ---------------- */
import { PrivateRoutes, PublicRoutes } from "./routes"

/* ---------------- Guard Autentication ---------------- */
import AuthGuard from "../guards/auth.guard"
import Login from "../pages/login/Login"


/* ---------------- Router ---------------- */
export const router = createBrowserRouter([
  {
    element: <AuthGuard />,
    errorElement: <NotFound/>,
    children: [
      {
        path: PublicRoutes.HOME,
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
        element: <AboutUs />,
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
      {
        path: PublicRoutes.CONTACT,
        element: <Contact />,
      },
      {
        path: PublicRoutes.QUESTIONS,
        element: <Questions />,
      },
      {
        path: PublicRoutes.LOGIN,
        element: <Login />,
      },
      {
        path: PrivateRoutes.DASHBOARD,
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
          {
            path: PrivateRoutes.DASH_USERS,
            element: <DashUsers/>
          }
        ]
      }
    ],
  },
])
