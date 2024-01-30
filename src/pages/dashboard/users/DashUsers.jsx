import DashNavigation from "../components/DashNavigation";
/**==================================================
 * DASHBOARD USERS
================================================== */
const DashUsers = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashNavigation />
      <div className="flex-1 bg-gray-800 text-white p-2 overflow-y-scroll md:overflow-hidden">
        DashUsers
      </div>
    </div>
  )
}
export default DashUsers;
