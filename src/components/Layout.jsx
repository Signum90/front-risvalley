import { NavBar } from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex justify-center">
        <div className="bg-blue-100">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout