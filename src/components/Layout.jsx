import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
import { ModalLogin } from "./ModalLogin"

const Layout = () => {
  return (
    <div className="h-screen w-full flex justify-center text-white">
      <ModalLogin />
      <NavBar />
      <Mask />
      <Outlet />
    </div>
  )
}

export default Layout