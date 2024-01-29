import DashNavigation from "./components/DashNavigation";

/**==================================================
 * DASHBOARD
================================================== */
const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        Dashboard General
      </div>
    </div>
  )
}

export default Dashboard;