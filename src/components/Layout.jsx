import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
import { MLogin } from "./Modal/MLogin"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center text-white">
      <MLogin />
      <NavBar />
      <Mask />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout