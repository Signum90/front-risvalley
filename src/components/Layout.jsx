import { NavBar } from "./NavBar"
// import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex justify-center text-white">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout