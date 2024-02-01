import { useLoaderData } from "react-router-dom"
import { FaCaretRight, FaArrowRight as FlechaDerecha } from "react-icons/fa6";
import CarrouselText from "./components/CarrouselText";

function App () {

  const { actors } = useLoaderData()
  console.log(actors);

  // card - service
  const contentService = [
    { title: '01. Logistics', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.', img: 'https://winframedemo.online/wp-content/uploads/2021/04/sdfsdfsdf.jpg' },
    { title: '02. Desing and Art', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.', img: 'https://winframedemo.online/wp-content/uploads/2021/04/diseno-collage-concepto-metaverso_23-2149419860.jpg' },
    { title: '03. Machine learning', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.', img: 'https://winframedemo.online/wp-content/uploads/2021/04/hombre-que-llevaba-gafas-inteligentes-tocando-pantalla-virtual-tecnologia-futurista-remix-digital_53876-104247.jpg' },
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
        <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          <h2 className="text-center">Bienvenido a</h2>
          <h2 className="text-center">Rispark <span className="text-secondary">tu llave</span></h2>
          <h3 className="text-center">al cambio</h3>
        </div>
      </section>
      {/* info risvalley */}
      <section className="w-full flex justify-center px-4 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* subtitle */}
          <h1 className="text-3xl font-medium md:text-5xl text-primary">Risvalley</h1>
          {/* contenedor asistencia */}
          <div className="w-full flex gap-4 flex-col md:flex-row lg:w-[700px] xl:w-[800px] 2xl:w-[850px] lg:justify-between">
            {/* info subtitle */}
            <p className="w-full lg:w-[70%] text-gray-400 text-[17px] font-kumbh">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique nunc, eget pharetra felis.
              Maecenas sit amet commodo risus, egestas auctor felis. Cras varius eros ac quam imperdiet vehicula.
              Pellentesque id sapien.
            </p>
            {/* llamar accion */}
            <button className="text-start font-bold max-w-[120px] min-w-[120px] h-[30px] flex items-center gap-2 font-custom1">
              View More
              <FlechaDerecha />
            </button>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="w-full flex justify-center px-4 my-[110px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* cards container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* cards */}
            {contentService.map((service) => (
              <div key={service.title} className="h-[450px] sm:h-[350px] flex flex-col gap-4 group cursor-pointer">
                <img src={service.img} className="h-[80%] w-full" alt="" />
                <div className="h-[10%] w-full text-lg font-medium flex gap-2 items-center justify-between">
                  <h4 className="text-2xl" >{service.title}</h4>
                  <button className="group-hover:border-white transition-all duration-300 border-[1px] h-8 w-8 rounded-full border-gray-600 flex items-center justify-center">
                    <FlechaDerecha />
                  </button>
                </div>
                <hr />
                <div className="h-[10%] w-full text-gray-600">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* frase */}
      <section id="home-message" className="w-full flex justify-center px-4 my-[110px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col items-center gap-8">
          {/* frase */}
          <h3 className="w-full xl:w-[850px] text-3xl lg:text-5xl font-medium text-center">
            Transform your business with AI startup: <span className="text-primary"> opportunities and innovations </span> that will change the game
          </h3>
          {/* autor frase */}
          <div className="flex flex-col text-center text-lg">
            <p className="font-semibold">Piter Bowman</p>
            <p className="text-gray-500">Director Creativo</p>
          </div>
        </div>
      </section>
      {/* estadisticas de actores */}
      <section id="home-stadistics" className="w-full flex justify-center px-4 my-[110px]">
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
                <h4 className="text-[100px] md:text-[120px] lg:text-[160px] w-full font-bold text-gray-900">{stadistic.value}</h4>
                <p className={`absolute top-[20%] h-[60px] text-primary font-bold text-2xl flex items-center justify-center w-full ${index === 3 ? '' : index === 1 ? 'border-0 border-gray-900 md:border-r-[1px]' : 'border-r-[1px] border-gray-900'}`}>{stadistic.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* carrousel text */}
      <CarrouselText />
      {/* mas estadisticas */}
      <section className="w-full flex justify-center px-4 my-[110px] overflow-x-hidden">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] container grid sm:grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* We develop & create digital future */}
          <div className="h-fit">
            <h3 className="w-[90%] text-secondary pb-6 font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">We develop and create digital future</h3>
            <p className="text-gray-500 pb-4 md:pl-[80px]">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <div className="flex flex-nowrap items-center gap-4">
              {/* play video - modal */}
              <button className="p-4 bg-gray-900 rounded-full text-xl">
                <FaCaretRight />
              </button>
              <p className="font-semibold text-lg">Video Presentación</p>
            </div>
          </div>
          {/* estadisticas actores */}
          <div className="hidden md:grid grid-cols-2 relative">
            {/* estadisticas */}
            <div className="flex flex-col items-center justify-center z-10 w-[250px] h-[250px] xl:h-[330px] xl:w-full">
              <h5 className="text-center text-5xl font-semibold xl:px-8">Estadísitcas de Actores</h5>
              <p className="text-secondary font-custom1 opacity-40 text-[130px] xl:text-[180px] h-[150px] transform -translate-y-[40px]">60</p>
            </div>
            {/* imagen 1 */}
            <img src="https://winframedemo.online/wp-content/uploads/elementor/thumbs/img-88-copyright-qieyl7qof5xsums88vurz46p2lmhswrj15ie4s9p44.jpg" className="w-[240px] xl:w-auto" alt="" />
            {/* imagen 2 */}
            <div className="relative h-[250px] xl:h-[330px] col-span-2">
              <img
                className="absolute h-full w-[250px] xl:w-[330px] -top-[70px] transformt translate-x-[50%]"
                src="https://winframedemo.online/wp-content/uploads/elementor/thumbs/sdfsdfsdf-qif36hp234tqxr9kprbvc4kj3bgz37sys1il62hx8m.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default App