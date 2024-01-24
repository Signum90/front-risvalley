import { FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaEarthAmericas as EarthIcon } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center px-8 py-12 bg-black text-white">
      {/* contenedor responsibe */}
      <div className="max-w-[1300px] container flex flex-col gap-8">
        {/* footer superior */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {/* logo - redes - info */}
          <div className="flex flex-col gap-4">
            {/* logo */}
            <div className="w-[130px] my-auto flex items-center justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            <p className="text-gray-600">Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
            {/* redes */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center">
                <FacebookIcon className="text-xl" />
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center">
                <XTwitterIcon className="text-xl" />
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center">
                <EarthIcon className="text-xl" />
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center">
                <InstagramIcon className="text-xl" />
              </div>
            </div>
          </div>
          {/* formulario */}
          <form action="submit" className="grid grid-cols-2 gap-4">
            <input className="bg-transparent border-b col-span-2 p-2 outline-none" placeholder="Nombre completo" type="text" />
            <input className="bg-transparent border-b p-2 outline-none" placeholder="Telefono" type="text" />
            <input className="bg-transparent border-b p-2 outline-none" placeholder="Email" type="email" />
            <textarea className="bg-transparent border-b col-span-2 p-2 outline-none h-[100px]" placeholder="Solicitud" name="" id=""></textarea>
            <button>Enviar</button>
          </form>
        </div>
        {/* separador */}
        <hr className="h-[1px]" />
        {/* footer inferior */}
        <div className="w-full text-center">
            <h2 className="text-white font-bold">Rispark© <span className="text-gray-600 font-normal">Todos los derechos reservados</span></h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer