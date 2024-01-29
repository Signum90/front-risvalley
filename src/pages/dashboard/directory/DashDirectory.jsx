import DashNavigation from "../components/DashNavigation";

/**==================================================
 * DASHBOARD DIRECTORY
================================================== */
const DashDirectory = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        Directorio
      </div>
    </div>
  )
}
export default DashDirectory;