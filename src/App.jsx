// import { useLoaderData } from "react-router-dom"

function App() {

  // const { actors } = useLoaderData()

  // function logIn () {
  //   localStorage.setItem("stateLog", "authenticated")
  // }

  // function logOut () {
  //   localStorage.setItem("stateLog", "no-authenticated")
  // }

  return (
    <div className="h-full w-screen">
      {/*  hero image */}
      <section className="mx-auto h-full flex flex-col justify-center items-center font-medium text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
        <h2 className="text-center">Welcome to</h2>
        <h2 className="text-center">prisma <span className="text-[#fbbb4c]">your key</span></h2>
        <h3 className="text-center">to innovation</h3>
      </section>
      {/* info risvalley */}
      <section className="w-full flex justify-center">
        {/* contenedor responsibe */}
        <div className="max-w-[1300px] container px-8 py-12 flex flex-col lg:flex-row gap-4 lg:justify-between">
          {/* subitle */}
          <h1 className="text-3xl font-medium md:text-5xl text-[#9EC864]">Risvalley</h1>
          {/* contenedor asistencia */}
          <div className="w-full flex gap-4 flex-col md:flex-row lg:w-[700px] xl:w-[800px] lg:justify-between">
            {/* infor subitulo */}
            <p className="lg:w-[500px] xl:w-[550px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique nunc, eget pharetra felis.
              Maecenas sit amet commodo risus, egestas auctor felis. Cras varius eros ac quam imperdiet vehicula.
              Pellentesque id sapien.
            </p>
            {/* llamar accion */}
            <button className="text-start font-bold min-w-[100px]">View More -- </button>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="w-full flex justify-center">
        {/* contenedor responsibe */}
        <div className="max-w-[1300px] container px-8 py-12 flex flex-col lg:flex-row gap-4 lg:justify-between">
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
    </div>
  )
}


export default App
