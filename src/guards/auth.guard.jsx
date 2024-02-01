import { Navigate } from "react-router-dom"
import Layout from "../pages/dashboard/Layout"
import authStore from "../Context/authStore"

// importa el data del usuario que esta logeado o no
const AuthGuard = () => {
  // get zustand
  const { auth } = authStore();
  // const data = { id: 123455, username: 'jair', email: 'email@elmail.com' }
  // obtener state del usuario - logeado o no
  return auth ? <Layout /> : <Navigate replace to="/" />

}

export default AuthGuard