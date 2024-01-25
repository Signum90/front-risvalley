import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { FaCaretRight, FaArrowRight as FlechaDerecha } from "react-icons/fa6";

function App () {

  const { actors } = useLoaderData()
  console.log(actors);


  const [items, setItems] = useState([
    { id: 1, content: 'Innovative' },
    { id: 2, content: 'Empowering' },
    { id: 3, content: 'Revolutionizing' },
  ])

  return (
    <div className="h-full w-full overflow-x-hidden">
      {/*  hero image */}
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="font-medium text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          <h2 className="text-center">Welcome to</h2>
          <h2 className="text-center">prisma <span className="txt-amarillo">your key</span></h2>
          <h3 className="text-center">to innovation</h3>
        </div>
      </section>
      {/* info risvalley */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* subitle */}
          <h1 className="text-3xl font-medium md:text-5xl txt-verde">Risvalley</h1>
          {/* contenedor asistencia */}
          <div className="w-full flex gap-4 flex-col md:flex-row lg:w-[700px] xl:w-[800px] 2xl:w-[850px] lg:justify-between">
            {/* infor subitulo */}
            <p className="lg:w-full xl:w-full text-gray-400 text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique nunc, eget pharetra felis.
              Maecenas sit amet commodo risus, egestas auctor felis. Cras varius eros ac quam imperdiet vehicula.
              Pellentesque id sapien.
            </p>
            {/* llamar accion */}
            <button className="text-start font-bold max-w-[120px] min-w-[120px] h-[30px] flex items-center gap-2">
              View More
              <FlechaDerecha />
            </button>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* targeta 1 */}
            <div className="h-[350px] flex flex-col gap-4">
              <div className="h-[80%] w-full bg-yellow-300"></div>
              <div className="h-[10%] w-full">01. Logistics</div>
              <hr />
              <div className="h-[10%] w-full">
                Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
              </div>
            </div>
            {/* targeta 2 */}
            <div className="h-[350px] flex flex-col gap-4">
              <div className="h-[80%] w-full bg-yellow-300"></div>
              <div className="h-[10%] w-full">02. Desing & Art</div>
              <hr />
              <div className="h-[10%] w-full">
                Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
              </div>
            </div>
            {/* targeta 3 */}
            <div className="h-[350px] flex flex-col gap-4">
              <div className="h-[80%] w-full bg-yellow-300"></div>
              <div className="h-[10%] w-full">03. Machine learning</div>
              <hr />
              <div className="h-[10%] w-full">
                Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* frase */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col items-center gap-8">
          {/* frase */}
          <h3 className="w-full xl:w-[850px] text-3xl lg:text-5xl font-medium text-center">
            Transform your business with AI startup: <span className="txt-verde"> opportunities and innovations </span> that will change the game
          </h3>
          {/* autor frase */}
          <div className="flex flex-col text-center text-lg">
            <h3 className="font-semibold">Piter Bowman</h3>
            <h3 className="text-gray-500">Director Creativo</h3>
          </div>
        </div>
      </section>
      {/* estadisticas de actores */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col items-center gap-7">
          {/* frase */}
          <h3 className="w-full text-3xl lg:text-5xl font-medium text-center">
            Estadisticas de Actores
          </h3>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique nunc, eget pharetra felis.
          </p>
          {/* autor frase */}
          <div className="pt-8 w-full grid grid-cols-4">
            {/* Projects */}
            <div className="relative text-center h-[160px] flex items-center justify-center">
              <p className="text-[160px] font-bold text-gray-900">98</p>
              <h4 className="absolute top-[45%] txt-verde font-bold text-2xl">Projects</h4>
            </div>
            {/* People */}
            <div className="relative text-center h-[160px] flex items-center justify-center">
              <p className="text-[160px] font-bold text-gray-900">65</p>
              <h4 className="absolute top-[45%] txt-verde font-bold text-2xl">People</h4>
            </div>
            {/* Universitys */}
            <div className="relative text-center h-[160px] flex items-center justify-center">
              <p className="text-[160px] font-bold text-gray-900">10</p>
              <h4 className="absolute top-[45%] txt-verde font-bold text-2xl">Universitys</h4>
            </div>
            {/* Dreams */}
            <div className="relative text-center h-[160px] flex items-center justify-center">
              <p className="text-[160px] font-bold text-gray-900">15</p>
              <h4 className="absolute top-[45%] txt-verde font-bold text-2xl">Dreams</h4>
            </div>
          </div>
        </div>
      </section>
      {/* carrousel text */}
      <section id="carrousel-section-home" className="h-fit w-full overflow-x-auto my-[120px]">
        <div className="flex gap-24 justify-start text-[200px]" >
          {items.map((item) => (
            <div key={item.id} className="flex flex-nowrap gap-[100px]">
              <h3>{item.content}</h3>
              <p>.</p>
            </div>
          ))}
        </div>
      </section>
      {/* mas estadisticas */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* We develop & create digital future */}
          <div>
            <h3 className="w-[90%] txt-amarillo pb-2 font-semibold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">We develop & create digital future</h3>
            <p className="text-gray-500 pb-4">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <div className="flex flex-nowrap items-center gap-4">
              {/* play video - modal */}
              <button className="p-4 bg-gray-900 rounded-full text-xl">
                <FaCaretRight />
              </button>
              <p className="font-semibold text-lg">Video Presentación</p>
            </div>
          </div>
          {/* estadisticas actores */}
          <div className="bg-red-300">2</div>
        </div>
      </section>
    </div>
  )
}


export default App