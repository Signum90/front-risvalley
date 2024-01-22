import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
const Layout = () => {
  return (
    <div className="h-screen w-full flex justify-center text-white">
      <NavBar />
      <Mask />
      <Outlet />
    </div>
  )
}

export default Layout