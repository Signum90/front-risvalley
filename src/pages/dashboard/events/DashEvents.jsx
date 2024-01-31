import DashNavigation from "../components/DashNavigation";
import "../dashboard.css";

/**==================================================
 * DASHBOARD EVENTS
================================================== */
const DashEvents = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        Dashboard Eventos
      </div>
    </div>
  )
}

export default DashEvents;