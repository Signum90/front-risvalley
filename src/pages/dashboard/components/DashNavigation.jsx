/**==================================================
 * DASHBOARD
================================================== */
import { FaUser, FaUsers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const DashNavigation = () => {
  return(
    <div className="flex flex-col h-full w-48 text-white">
      {/* LOGO */}
      <div className="p-2 border-b">
        <img src="../../../public/assets/logo2.png" alt=""/>
      </div>    
      <div className="flex flex-col h-full justify-between">
        {/* MENÚ */}
        <div className="p-2 mt-2 w-full flex flex-col gap-1 text-sm">
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <FaUsers className="mt-1 ml-1"/> 
            Directorio de Ofertas
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <FaUsers className="mt-1 ml-1"/> 
            Gestión de Usuarios 
          </button>
          <button className="flex gap-2 w-full p-1 rounded hover:bg-slate-500 text-left">
            <FaUsers className="mt-1 ml-1"/> 
            Gestión de Retos 
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