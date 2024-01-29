import { FaAlignRight, FaUserAstronaut as LoginUser, FaUserPlus as AddUser, FaRocket as Rocket, FaAngleDown } from "react-icons/fa6"
import { showModal } from "./Modal/ModalActions";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../router/routes";
import { useLocation } from 'react-router-dom';

export const NavBar = () => {

  let location = useLocation()

  // si se ingresa a una de estas rutas se añade absolute al nav para otro comportamiento
  const arrayLocations = [ PublicRoutes.HOME, '/'+PublicRoutes.NOSOTROS]

  function LoginUserControl() {
    showModal()
    // mas funcionalidades
  }

  return (
    <div className={`w-full ${ arrayLocations.includes(location.pathname) ? 'absolute top-0' : '' } flex justify-center h-[150px] bg-opacity-65 bg-black`}>
      {/* navbar - container responsibe*/}
      <nav className="xl:max-w-[1100px] 2xl:max-w-[1300px] container my-auto">
        {/* contenedor de asistencia */}
        <div className="w-full h-[80px] flex items-center text-white">

          {/* estructura en laptop - pc */}
          <div className="w-full hidden justify-between xl:flex">
            {/* logo */}
            <div className="w-[150px] my-auto h-full flex items-center justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            {/* navegacion */}
            <div className="w-full p-8 flex justify-center text-lg font-semibold gap-6">

              <Link to={PublicRoutes.HOME} >Inicio</Link>

              <a href="#home-message">Ecosistema de innovacion</a>

              <div  className="relative flex items-center gap-2 group">
                <Link to={PublicRoutes.SERVICE}>Servicios</Link>
                <FaAngleDown />
                <div className="bg-black pt-4 absolute hidden group-hover:flex top-full -translate-x-[50%] left-1/2 right-1/2 w-[180px] border-b-2 br-amarillo transition-all duration-[2000] flex-col items-center">
                  <Link to={PublicRoutes.DIRECTORY} className="p-2 hover:text-secondary">Directorio</Link>
                  <Link to={PublicRoutes.INNOVATION} className="p-2 hover:text-secondary">Innovacion abierta</Link>
                  <Link to={PublicRoutes.LIBRARY} className="p-2 hover:text-secondary">Biblioteca</Link>
                  <Link to={PublicRoutes.COURSES} className="p-2 hover:text-secondary">Cursos</Link>
                </div>
              </div>

              <Link to={PublicRoutes.NOSOTROS} >Nosotros</Link>

              <div className="flex items-center gap-2 relative group">
                <Link to={PublicRoutes.CONTACT}>Contacto</Link>
                <FaAngleDown />
                <div className="bg-black pt-4 absolute hidden group-hover:flex top-full -translate-x-[50%] left-1/2 right-1/2 w-[210px] border-b-2 br-amarillo transition-all duration-[2000] flex-col items-center">
                  <Link to={PublicRoutes.QUESTIONS} className="p-2 hover:text-secondary">Preguntas Frecuentes</Link>
                </div>
              </div>

            </div>
            {/* iconos */}
            <div className="flex gap-4 items-center">
              <LoginUser onClick={LoginUserControl} className="cursor-pointer border-[2px] border-white min-w-10 min-h-10 rounded-full p-2" />
              <AddUser className="cursor-pointer border-[2px] border-white min-w-10 min-h-10 rounded-full p-2" />
              <Rocket className="cursor-pointer border-[2px]  border-white min-w-10 min-h-10 rounded-full p-2" />
            </div>
          </div>

          {/* estructura para mobiles */}
          <div className="w-full flex justify-between xl:hidden">
            {/* logo */}
            <div className="w-[150px] my-auto h-full justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            {/* icono */}
            <div className="flex items-center">
              <FaAlignRight className="w-8 h-8" />
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}