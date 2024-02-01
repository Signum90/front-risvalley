/**==================================================
 * DASHBOARD EVENTS
================================================== */
import { FaCalendarAlt } from "react-icons/fa";
const DashEvents = () => {
  return (
    <div className="fade-in">
      <div className="p-2 border-b">
        <h1 className="text-xl flex gap-1 font-k font-bold items-center">
          <FaCalendarAlt className="text-xl mr-1"/>Gestión de Eventos
        </h1>
      </div>
    </div>
  )
}

export default DashEvents;