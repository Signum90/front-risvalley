import { NavBar } from "./NavBar"
import { Outlet } from "react-router-dom"
import Mask from "./Mask"
import { MLogin } from "./Modal/ModalFragments"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center text-white">
      {/* modal */}
      <MLogin />
      {/* navegacion */}
      <NavBar />
      {/* mascara de acciones */}
      <Mask />
      {/* paginas */}
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Layout