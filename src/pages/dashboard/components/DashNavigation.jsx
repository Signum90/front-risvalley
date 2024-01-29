/**==================================================
 * DASHBOARD
================================================== */
import { FaUser, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { MdDashboard, MdScience } from "react-icons/md";
// import { IoIosArrowForward } from "react-icons/io";

const DashNavigation = () => {
  return(
    <div className="flex flex-col h-full w-48 text-white">
      {/* LOGO */}
      <div className="p-2 border-b">
        <img src="../../../public/assets/logo2.png" alt=""/>
      </div>    
      {/* MENÚ */}
      <div className="flex flex-col h-full justify-between">
        <div className="p-2 mt-2 w-full flex flex-col gap-1 text-sm">
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left bg-slate-400">
            <MdDashboard className="mt-1 ml-1"/> 
            Dashboard
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <IoIosMegaphone className="mt-1 ml-1"/> 
            Directorio de Ofertas
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <FaUsers className="mt-1 ml-1"/> 
            Gestión de Usuarios 
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <MdScience className="mt-1 ml-1"/> 
            Gestión de Retos 
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <FaCalendarAlt className="mt-1 ml-1"/> 
            Gestión de Eventos 
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <LuBrainCircuit className="mt-1 ml-1"/> 
            Conocimientos 
          </button>
        </div>
        {/* FOOTER DASH */}
        <div className="w-full flex flex-col gap-1 p-2 border-t">  
          <p className="flex gap-1"> <FaUser className="mt-1"/> El coco fulanito</p>
          <p className="text-xs">elcoco@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default DashNavigation;