import { Navigate } from "react-router-dom"
import Layout from "../components/Layout"
import authStore from "../Context/authStore"
import LayoutDash from "../pages/dashboard/LayoutDash"
import { useLocation } from "react-router-dom"
import { PublicRoutes, PrivateRoutes } from "../router/routes"

const AuthGuard = () => {

  const location = useLocation()
  const { auth, type } = authStore()

  // Private routes
  for (let key in PrivateRoutes) {

    const value = PrivateRoutes[key]

    // si es una ruta privdad
    if (location.pathname == '/dashboard' || location.pathname == `/${PrivateRoutes.DASHBOARD}/`+value) {

      // si no esta autenticado
      if (!auth || type === 'user') return <Navigate replace to={PublicRoutes.HOME} />

      // si esta autenticado
      return <LayoutDash />

    }
  }

  // Public routes
  for (let key in PublicRoutes) {

    const value = PublicRoutes[key]

    // si es una ruta publica
    if (location.pathname == '/' || location.pathname == '/'+value ) {

      // si no esta autenticado
      if (type === 'admin') return <Navigate replace to={PrivateRoutes.DASHBOARD} />

      // si esta autenticado
      return <Layout />
    }
  }

  // Bad end routes
  window.location.href="/"

}

export default AuthGuard