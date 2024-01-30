/**==================================================
 * DASHBOARD
================================================== */
import { useEffect, useState } from "react";
import { FaUser, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { MdDashboard, MdScience } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";

const DashNavigation = () => {
  // STATES
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  
  // EFFECTS
  useEffect(() =>{
    setActiveLink(location.pathname)
  }, [location.pathname]);

  // FUNCION LINK ACTIVO
  const isActive = (path) => {
    return path === activeLink ? 'bg-slate-400' : ""
  }
  

  return(
    <div className="flex flex-col h-full w-48 text-white">
      {/* LOGO */}
      <div className="p-2 border-b">
        <img src="../../../public/assets/logo2.png" alt=""/>
        <p className="flex gap-1 mt-1"><FaUser className="mt-1"/> El coco fulanito</p>
        <p className="text-xs">elcoco@gmail.com</p>
      </div>    
      {/* MENÚ */}
      <div className="flex flex-col h-full justify-between">
        <div className="p-2 mt-2 w-full flex flex-col gap-1 text-sm">
          
          {/* Dashboard */}
          <Link to={"/dashboard"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard")}`}>
              <MdDashboard className="ml-1"/> 
              Dashboard
            </button>
          </Link>
          
          {/* Directorio Ofertas */}
          <Link to={"/dashboard/directory"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard/directory")}`}>
              <IoIosMegaphone className="ml-1"/> 
              Directorio de Ofertas
            </button>
          </Link>
          
          {/* Gestión Usuarios */}
          <Link to={"/dashboard/users"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard/users")}`}>
              <FaUsers className="ml-1"/> 
              Gestión de Usuarios 
            </button>
          </Link>
          
          {/* Gestión Retos */}
          <Link to={"/dashboard/innovation"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard/innovation")}`}>
              <MdScience className="ml-1"/> 
              Gestión de Retos 
            </button>
          </Link>
          
          {/* Gestión Eventos */}
          <Link to={"/dashboard/events"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard/events")}`}>
              <FaCalendarAlt className="ml-1"/> 
              Gestión de Eventos 
            </button>
          </Link>
          
          {/* Gestión Repositorio */}
          <Link to={"/dashboard/repository"}>
            <button className={`flex gap-2 items-center w-full p-1 rounded hover:bg-slate-500 text-left ${isActive("/dashboard/repository")}`}>
              <LuBrainCircuit className="ml-1"/> 
              Conocimientos 
            </button>
          </Link>

        </div>
        {/* FOOTER DASH */}
        <div className="w-full flex flex-col gap-1 p-2 border-t">  
          <div className="text-center mt-1">
            <p className="text-xs">Rispark© 2024</p>
            <p className="text-xs">Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashNavigation;