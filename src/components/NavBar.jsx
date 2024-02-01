import { useState, useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom"

import { PublicRoutes } from "../router/routes"

import { FaAlignRight, FaUserAstronaut as LoginUser, FaUserPlus as AddUser, FaRocket as Rocket, FaAngleDown, FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaEarthAmericas as EarthIcon } from "react-icons/fa6"
import { IoCloseOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

const ButtonClose = ({setState, clas}) => {
  return (
    <button
      className={`${clas} flex items-center group text-gray-400 text-lg font-custom2`}
      onClick={()=> {setState(false)}}>
      Cerrar
      <IoCloseOutline className="text-white text-4xl transition-all duration-500 group-hover:rotate-180" />
    </button>
  )
}

export const NavBar = () => {

  const [visibilityNavMob, setVisibilityNavMob] = useState(false)
  const [visServiceDiv, setVisServiceDiv] = useState(false)
  const [visContacDiv, setVisContacDiv] = useState(false)

  const location = useLocation()
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
      <nav className="xl:max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-0 container my-auto">
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
      {/* navbar - container mobil */}
      <nav ref={navRef} className={`${visibilityNavMob ? 'fixed flex flex-nowrap overflow-hidden' : 'hidden'} z-50 xl:hidden w-full h-screen bg-[#17111d]`}>
        {/* section left */}
        <section className="px-6 w-full md:w-2/3 flex flex-col justify-evenly">
          <header className="w-full my-auto flex items-center justify-between pt-6">
            <img className="w-[100px]" src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            <ButtonClose clas="md:hidden" setState={()=> {setVisibilityNavMob(false)}} />
          </header>
          <div className="h-full flex flex-col justify-center items-start gap-4 text-3xl font-custom2 font-bold w-full md:w-[60%]">
            <Link to={PublicRoutes.HOME} className="text-gray-400 hover:text-white transition-colors duration-300">
              Inicio
            </Link>
            <a href="#home-message" className={`${location.pathname === '/' ? 'block' : 'hidden'} text-gray-400 hover:text-white transition-colors duration-300`}>Ecosistema de innovación</a>
            <div className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-4">
              <Link to={PublicRoutes.SERVICE}>Servicios</Link>
              <button onClick={() => setVisServiceDiv(!visServiceDiv)}>
                <HiArrowLongRight />
              </button>
            </div>
            <div className={`${visServiceDiv ? '' : 'hidden'} text-lg pl-12 flex flex-col text-gray-400 gap-2`}>
              <Link to={PublicRoutes.DIRECTORY} className="hover:text-white transition-colors duration-300" >Directorio</Link>
              <Link to={PublicRoutes.INNOVATION} className="hover:text-white transition-colors duration-300" >Innovacion Abierta</Link>
              <Link to={PublicRoutes.LIBRARY} className="hover:text-white transition-colors duration-300" >Biblioteca</Link>
              <Link to={PublicRoutes.COURSES} className="hover:text-white transition-colors duration-300" >Cursos</Link>
            </div>
            <Link to={PublicRoutes.NOSOTROS} className="text-gray-400 hover:text-white transition-colors duration-300">
              Nosotros
            </Link>
            <div className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-4">
              <Link to={PublicRoutes.CONTACT}>Contacto</Link>
              <button onClick={() => setVisContacDiv(!visContacDiv)}>
                <HiArrowLongRight />
              </button>
            </div>
            <div className={`${visContacDiv ? '' : 'hidden'} text-lg pl-12 text-gray-400`}>
              <Link className="hover:text-white transition-colors duration-300">Preguntas Frecuentes</Link>
            </div>
          </div>
          <footer className="py-6 flex gap-4 border-t-[1px]">
            <FacebookIcon className="text-lg hover:text-quaternary cursor-pointer transition-colors duration-300" />
            <XTwitterIcon className="text-lg hover:text-quaternary cursor-pointer transition-colors duration-300" />
            <EarthIcon className="text-lg hover:text-quaternary cursor-pointer transition-colors duration-300" />
            <InstagramIcon className="text-lg hover:text-quaternary cursor-pointer transition-colors duration-300" />
          </footer>
        </section>
        {/* section right */}
        <section className="hidden md:flex px-6 bg-black w-1/3 flex-col justify-between">
          <header className="pt-6 h-[100px] flex items-center justify-end">
            <ButtonClose setState={()=> {setVisibilityNavMob(false)}} />
          </header>
          <div className="h-full flex flex-col justify-center items-start gap-12 font-custom1">
            <div className="text-xl flex flex-col gap-2 overflow-hidden">
              Get in Touch
              <p className="font-custom1 text-2xl group">
                info@example.com
                <hr className="group-hover:-translate-x-[110%] transition-all duration-500" />
              </p>
            </div>
            <div className="text-xl flex flex-col gap-2">
              Have a startup projecto ?
              <Link className="flex items-center gap-2 group" target="_blank" to={PublicRoutes.CONTACT}>
                <p className="font-custom1 text-2xl">Send Brief</p>
                <HiArrowLongRight className="text-3xl text-quaternary transition-all duration-500 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
          <footer className="invisible py-6">Footer oculto</footer>
        </section>
      </nav>
    </div>
  )
}