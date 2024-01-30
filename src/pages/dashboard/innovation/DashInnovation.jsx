import DashNavigation from "../components/DashNavigation";

/**==================================================
 * DASHBOARD INNOVATION
================================================== */
const DashInnovation = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        Dashboard Retos
      </div>
    </div>
  )
}
export default DashInnovation;