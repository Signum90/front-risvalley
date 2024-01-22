import { FaAlignRight, FaUserAstronaut as LoginUser, FaUserPlus as AddUser, FaRocket as Rocket } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <div className="w-full absolute flex justify-center h-[150px] opacity-65 bg-black text-white">
      {/* navbar - container responsibe*/}
      <nav className="container my-auto">
        {/* contenedor de asistencia */}
        <div className="w-full h-[85px] flex items-center px-6">

          {/* estructura en laptop - pc */}
          <div className="w-full hidden justify-between xl:flex">
            {/* logo */}
            <div className="w-[150px] my-auto h-full flex items-center justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            {/* navegacion */}
            <div className="w-full p-8 flex justify-center text-lg font-semibold gap-6">
              <div>Inicio</div>
              <div>Ecosistema de innovacion</div>
              <div>Servicios</div>
              <div>Nosotros</div>
              <div>Contacto</div>
            </div>
            {/* iconos */}
            <div className="flex gap-4 items-center">
              <LoginUser className="border-[2px] border-white min-w-10 min-h-10 rounded-full p-2" />
              <AddUser className="border-[2px] border-white min-w-10 min-h-10 rounded-full p-2" />
              <Rocket className="border-[2px]  border-white min-w-10 min-h-10 rounded-full p-2" />
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