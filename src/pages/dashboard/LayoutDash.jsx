import { Outlet } from "react-router-dom"
import DashNavigation from "./components/DashNavigation"
import "./dashboard.css"
// import authStore from "../../Context/authStore"

const LayoutDash = () => {
  // const {type} = authStore();
  
  // if(type !== "admin") return <Navigate replace to="/"/>

  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2 overflow-y-scroll md:overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
export default LayoutDash