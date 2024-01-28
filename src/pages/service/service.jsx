import CarrouselText from "../../components/CarrouselText"

const Service = () => {
  return (
    <div className="h-full w-full">
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full h-[60%] flex items-center justify-center"> hero image </div>
        <div className="w-full h-[40%] flex items-center justify-center">carousel de texto que sale en el home</div>
      </section>
      <CarrouselText />
    </div>
  )
}

export default Service