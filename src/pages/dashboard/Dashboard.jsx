import DashNavigation from "./components/DashNavigation";
import { FaChartPie } from "react-icons/fa";
/**==================================================
 * DASHBOARD
================================================== */
const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        {/* ESTADÍSTICAS GENERALES */}
        <div className="p-2">
          <h1 className="text-4xl flex gap-1"> <FaChartPie/> Estadísticas</h1>
          <div className="flex gap-3 mt-2">
            <div className="flex-1">
              <div className="w-full h-52 bg-primary text-center rounded">
                <p className="text-lg">Personas</p>
                <h1 className="text-8xl mt-5">100</h1>
              </div>

            </div>
            <div className="flex-1">
              <div className="w-full h-52 bg-secondary text-center rounded">
                <p className="text-lg">Universidades</p>
                <h1 className="text-8xl mt-5">20</h1>
              </div>

            </div>
            <div className="flex-1">
              <div className="w-full h-52 bg-tertiary text-center rounded">
                <p className="text-lg">Entidades</p>
                <h1 className="text-8xl mt-5">180</h1>
              </div>

            </div>
            <div className="flex-1">
              <div className="w-full h-52 bg-quaternary text-center rounded">
                <p className="text-lg">Retos</p>
                <h1 className="text-8xl mt-5">25</h1>
              </div>

            </div>
          </div>
        </div>
        {/*  */}
        <div className="p-2">

        </div>
      </div>
    </div>
  )
}

export default Dashboard;