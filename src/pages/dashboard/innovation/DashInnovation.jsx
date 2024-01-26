import DashNavigation from "../components/DashNavigation";

/**==================================================
 * DASHBOARD INNOVATION
================================================== */
const DashInnovation = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex bg-white h-screen w-48 p-2">
        <DashNavigation />
      </div>
      <div className="flex-1 text-white p-2">
        Directorio
      </div>
    </div>
  )
}
export default DashInnovation;