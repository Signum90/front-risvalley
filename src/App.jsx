import { useLoaderData } from "react-router-dom"
import { FaCaretRight, FaArrowRight as FlechaDerecha } from "react-icons/fa6";
import CarrouselText from "./components/CarrouselText";

function App () {

  const { actors } = useLoaderData()
  console.log(actors);

  // card - service
  const contentService = [
    { title: '01. Logistics', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
    { title: '02. Desing & Art', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
    { title: '03. Machine learning', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
  ]

  // stadistics
  const stadisticData = [
    { title: 'Projects', value: '98' },
    { title: 'People', value: '65' },
    { title: 'Universitys', value: '10' },
    { title: 'Dreams', value: '15' }
  ]

  return (
    <div className="h-full w-full">
      {/*  hero image */}
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="font-medium text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-r">
          <h2 className="text-center">Bienvenido a</h2>
          <h2 className="text-center">Rispark <span className="txt-amarillo">tu llave</span></h2>
          <h3 className="text-center">al cambio</h3>
        </div>
      </section>
      {/* info risvalley */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* subitle */}
          <h1 className="text-3xl font-medium md:text-5xl txt-verde font-r">Risvalley</h1>
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
          {/* cards container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* cards */}
            {contentService.map((service) => (
              <div key={service.title} className="h-[350px] flex flex-col gap-4 group cursor-pointer">
                <div className="h-[80%] w-full bg-yellow-300"></div>
                <div className="h-[10%] w-full text-lg font-medium flex gap-2 items-center justify-between">
                  {service.title}
                  <button className="group-hover:border-white transition-all duration-300 border-[1px] h-8 w-8 rounded-full border-gray-600 flex items-center justify-center">
                    <FlechaDerecha />
                  </button>
                </div>
                <hr />
                <div className="h-[10%] w-full">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* frase */}
      <section id="home-message" className="w-full flex justify-center px-8 my-[120px]">
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
      <section id="home-stadistics" className="w-full flex justify-center px-8 my-[120px]">
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
          <div className="w-full grid grid-cols-2 md:grid-cols-4 pt-8">
            {stadisticData.map( (stadistic, index) => (
              <div key={stadistic.title} className="relative text-center h-[120px] flex items-center justify-center">
                <p className="text-[100px] md:text-[120px] lg:text-[160px] w-full font-bold text-gray-900">{stadistic.value}</p>
                <h4 className={`absolute top-[35%] h-[60px] txt-verde font-bold text-2xl flex items-center justify-center w-full ${index === 3 ? '' : index === 1 ? 'border-0 border-gray-900 md:border-r-[1px]' : 'border-r-[1px] border-gray-900'}`}>{stadistic.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* carrousel text */}
      <CarrouselText />
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
          <div className="bg-red-300 hidden md:block">2</div>
        </div>
      </section>
    </div>
  )
}


export default App