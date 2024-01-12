import { NavBar } from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <NavBar />
        <div className="bg-blue-100 h-screen">
          <Outlet />
        </div>
      <Footer />
    </>
  )
}

export default Layout