import { FaUsers } from "react-icons/fa";
/**==================================================
 * DASHBOARD USERS
================================================== */
const DashUsers = () => {
  return (
    <div className="fade-in">
      <div className="p-2 border-b">
        <h1 className="text-xl flex gap-1 font-k font-bold items-center">
          <FaUsers className="text-xl mr-1"/>Gestión de Usuarios
        </h1>
      </div>
    </div>
  )
}
export default DashUsers;
