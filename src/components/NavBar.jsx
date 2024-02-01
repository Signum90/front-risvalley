import { FaAlignRight, FaUserAstronaut as LoginUser, FaUserPlus as AddUser, FaRocket as Rocket, FaAngleDown } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { PublicRoutes } from "../router/routes"
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import { FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaEarthAmericas as EarthIcon } from "react-icons/fa6";

export const NavBar = () => {

  const [visibilityNavMob, setVisibilityNavMob] = useState(false)

  let location = useLocation()
  const navRef = useRef()

  // si se ingresa a una de estas rutas se añade absolute al nav para otro comportamiento
  const arrayLocations = [ PublicRoutes.HOME, '/'+PublicRoutes.NOSOTROS]

  // unable scroll page general
  useEffect(() => {

    if (visibilityNavMob) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

  }, [visibilityNavMob])


  return (
    <div className={`w-full ${ arrayLocations.includes(location.pathname) ? 'absolute top-0' : '' } flex justify-center h-[150px] bg-opacity-65 bg-black`}>
      {/* navbar - container responsibe*/}
      <nav className="xl:max-w-[1100px] 2xl:max-w-[1300px] container my-auto">
        {/* contenedor de asistencia */}
        <div className="w-full h-[80px] flex items-center text-white">
          {/* estructura en laptop - pc */}
          <div className="w-full hidden justify-between xl:flex">
            {/* logo */}
            <div className="w-[140px] my-auto h-full flex items-center justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            {/* navegacion */}
            <div className="w-full flex justify-center items-center text-lg font-semibold">

              <Link to={PublicRoutes.HOME} className="pb-2 px-6 mx-2 transition-colors duration-300 hover:text-secondary border-b-[3px] border-transparent hover:border-secondary">Inicio</Link>

              <a href="#home-message" className={`${location.pathname === '/' ? 'block' : 'hidden'} pb-2 px-6 mx-2 transition-colors duration-300 hover:text-secondary border-b-[3px] border-transparent hover:border-secondary`}>Ecosistema de innovación</a>

              <div className="relative flex items-center gap-2 group mx-2 border-b-[3px] border-transparent hover:border-secondary cursor-pointer">
                <Link to={PublicRoutes.SERVICE} className="pb-2 transition-colors duration-300 group-hover:text-secondary">Servicios</Link>
                <FaAngleDown className="transform -translate-y-1 group-hover:text-secondary" />
                <div className="bg-black absolute hidden group-hover:flex top-full -translate-x-[50%] left-1/2 right-1/2 w-[180px] border-b-2 border-secondary transition-colors duration-[2000] flex-col items-center">
                  <Link to={PublicRoutes.DIRECTORY} className="p-2 hover:text-secondary">Directorio</Link>
                  <Link to={PublicRoutes.INNOVATION} className="p-2 hover:text-secondary">Innovación abierta</Link>
                  <Link to={PublicRoutes.LIBRARY} className="p-2 hover:text-secondary">Biblioteca</Link>
                  <Link to={PublicRoutes.COURSES} className="p-2 hover:text-secondary">Cursos</Link>
                </div>
              </div>

              <Link to={PublicRoutes.NOSOTROS} className="pb-2 px-6 mx-2 transition-colors duration-300 hover:text-secondary border-b-[3px] border-transparent hover:border-secondary">Nosotros</Link>

              <div className="relative flex items-center gap-2 group mx-2 border-b-[3px] border-transparent hover:border-secondary cursor-pointer">
                <Link to={PublicRoutes.CONTACT} className="pb-2 transition-colors duration-300 group-hover:text-secondary">Contacto</Link>
                <FaAngleDown className="transform -translate-y-1 group-hover:text-secondary" />
                <div className="bg-black absolute hidden group-hover:flex top-full -translate-x-[50%] left-1/2 right-1/2 w-[210px] border-b-2 border-secondary transition-colors duration-[2000] flex-col items-center">
                  <Link to={PublicRoutes.QUESTIONS} className="p-2 hover:text-secondary">Preguntas Frecuentes</Link>
                </div>
              </div>

            </div>
            {/* iconos */}
            <div className="flex gap-4 items-center">
              <LoginUser className="cursor-pointer border-[2px] border-white min-w-[38px] min-h-[38px] rounded-full p-2 hover:text-secondary hover:border-secondary transition-all duration-300" />
              <AddUser className="cursor-pointer border-[2px] border-white min-w-[38px] min-h-[38px] rounded-full p-2 hover:text-secondary hover:border-secondary transition-all duration-300" />
              <Rocket className="cursor-pointer border-[2px]  border-white min-w-[38px] min-h-[38px] rounded-full p-2 hover:text-secondary hover:border-secondary transition-all duration-300" />
            </div>
          </div>
          {/* estructura para mobiles */}
          <div className="w-full flex justify-between xl:hidden">
            {/* logo */}
            <div className="w-[100px] md:w-[130px] my-auto h-full justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            {/* icono */}
            <button className="flex items-center" onClick={() => {setVisibilityNavMob(true)}}>
              <FaAlignRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>
      {/* container nav mobil */}
      <nav ref={navRef} className={`${visibilityNavMob ? 'fixed flex flex-nowrap overflow-hidden' : 'hidden'} z-50 xl:hidden w-full h-screen bg-[#17111d]`}>
        {/* section left */}
        <section className="px-6 w-2/3 flex flex-col justify-evenly">
          {/* header */}
          <header className="w-[100px] my-auto flex items-center justify-center">
            <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            <button className="hidden" onClick={()=> {setVisibilityNavMob(false)}}>cerrar</button>
          </header>
          {/* body */}
          <div className="h-full flex items-center">
          </div>
          {/* footer */}
          <footer className="py-4 flex gap-4 border-t-[1px]">
            <FacebookIcon className="text-xl" />
            <XTwitterIcon className="text-xl" />
            <EarthIcon className="text-xl" />
            <InstagramIcon className="text-xl" />
          </footer>
        </section>
        {/* section right */}
        <section className="px-6 bg-black w-1/3">
          <header>
            <button onClick={()=> {setVisibilityNavMob(false)}}>cerrar</button>
          </header>
          <div className="h-full flex items-center">asd</div>
        </section>
      </nav>
    </div>
  )
}