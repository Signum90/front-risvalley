import { Navigate } from "react-router-dom"
import Layout from "../components/Layout"
import authStore from "../Context/authStore"
import LayoutDash from "../pages/dashboard/LayoutDash"
import { useLocation } from "react-router-dom"
import { PublicRoutes, PrivateRoutes } from "../router/routes"

const AuthGuard = () => {

  const location = useLocation()
  const { auth, type } = authStore()

  for (let key in PrivateRoutes) {

    const value = PrivateRoutes[key]

    // si es una ruta privdad
    if (location.pathname == '/'+value) {

      // si no esta autenticado
      if (!auth || type === 'user') return <Navigate replace to={PublicRoutes.HOME} />

      // si esta autenticado
      return <LayoutDash />

    }
    else {
      return <Layout />
    }
  }


}

export default AuthGuard