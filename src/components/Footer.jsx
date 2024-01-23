const Footer = () => {
  return (
    <footer className="bg-black text-white w-full flex flex-colitems-center justify-center">
      {/* contenedor responsibe */}
      <div className="max-w-[1300px] container">
        {/* footer superior */}
        <div className="py-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <div className="w-[130px] my-auto h-full flex items-center justify-center">
              <img src="https://risvalley.b-cdn.net/wp-content/uploads/2020/09/RISVALLY-LOGO-200-148.png" alt="logo risvalley" />
            </div>
            <p>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
            <div>redes</div>
          </div>
          <div className="bg-red-300">

          </div>
        </div>
        {/* separador */}
        <hr className="h-[1px]" />
        {/* footer inferior */}
        <div className="py-7 w-full text-center">
            <h2 className="text-white font-bold">Rispark© <span className="text-gray-600 font-normal">Todos los derechos reservados</span></h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer