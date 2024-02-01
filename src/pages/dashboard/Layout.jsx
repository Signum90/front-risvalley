import { Outlet } from "react-router-dom"
import DashNavigation from "./components/DashNavigation"
import "./dashboard.css"

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2 overflow-y-scroll md:overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout