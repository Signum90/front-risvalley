import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex justify-center text-white">
        <Mask />
        <Outlet />
      </div>
    </>
  )
}

export default Layout