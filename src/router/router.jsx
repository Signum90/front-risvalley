/* ---------------- react-router ---------------- */
import { createBrowserRouter } from "react-router-dom"

/* ---------------- Pages ---------------- */
import NotFound from "../pages/404/NotFound"
import App from "../App"
import Library from "../pages/library/Library"
import Innovation from "../pages/innovation/Innovation"
import Service from "../pages/service/service"
import We from "../pages/we/we"
import Courses from "../pages/courses/Courses"
import Directory from "../pages/directory/Directory"
import Dashboard from "../pages/dashboard/Dashboard"
import AddEntity from "../pages/adEntitys/AddEntity"
import Layout from "../components/Layout"

/* ---------------- load-data ---------------- */
import { uploadActors } from "../upload"
import { uploadChallengers } from "../pages/innovation/upload"
import { uploadLibrary } from "../pages/library/upload"
import { uploadTeam } from "../pages/we/uploadTeam"

/* ---------------- Router ---------------- */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <App />,
        loader: uploadActors
      },
      {
        path: "library",
        element: <Library />,
        loader: uploadLibrary
      },
      {
        path: "innovation",
        element: <Innovation />,
        loader: uploadChallengers
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "we",
        element: <We />,
        loader: uploadTeam
      },
      {
        path: "directory",
        element: <Directory />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "addEntity",
            element: <AddEntity />,
          }
        ]
      },
    ],
  },
])
