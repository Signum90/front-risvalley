import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
import { MLogin } from "./Modal/MLogin"

const Layout = () => {
  return (
    <div className="h-screen w-full flex justify-center text-white">
      <MLogin />
      <NavBar />
      <Mask />
      <Outlet />
    </div>
  )
}

export default Layout