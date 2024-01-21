import { Outlet, Navigate } from "react-router-dom"
// importa el data del usuario que esta logeado o no

const AuthGuard = () => {

  const data = { id: 123455, username: 'jair', email: 'email@elmail.com' }

  // obtener state del usuario - logeado o no
  return data.id ? <Outlet /> : <Navigate replace to="/" />
}

export default AuthGuard