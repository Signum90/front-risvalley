import DashNavigation from "../components/DashNavigation";

/**==================================================
 * DASHBOARD REPOSITORY
================================================== */
const DashRepository = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2">
        Repositorio de Conocimientos
      </div>
    </div>
  )
}

export default DashRepository;