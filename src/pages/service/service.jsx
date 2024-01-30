import CarrouselText from "../../components/CarrouselText"
import { FaCaretRight } from "react-icons/fa6";

const Service = () => {

  const services = [
    {title : 'Testing', description: 'Conceptetur adipiscing edit'},
    {title : 'Suport', description: 'Conceptetur adipiscing edit'},
    {title : 'Desing', description: 'Conceptetur adipiscing edit'},
    {title : 'Creature', description: 'Conceptetur adipiscing edit'},
  ]

  const questionsItems = [
    {question: 'What are my options?', reponse : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {question: 'How scalable is the CRM system?', reponse : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {question: 'Can I try CRM for free?', reponse : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
  ]

  return (
    <div className="h-full w-full">
      {/* hero images */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map( service => (
          <div key={service.title} className="bg-red-300 border-b-[1px] p-12 h-[400px] sm:h-[350px] sm:border-r-[1px] md:min-h-[250px] md:p-8 md:border-b-0 xl:h-[480px] border-white flex flex-col justify-end">
            <p className="text-xl font-semibold">{service.title}</p>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
      {/* carrousel */}
      <CarrouselText />
      {/* questions */}
      <section className="w-full flex justify-center px-4 my-[110px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container grid sm:grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="h-fit">
            <button className="p-4 bg-gray-900 rounded-full text-xl mb-4"> <FaCaretRight /> </button>
            <h3 className="pb-6 text-2xl">We develop and create digital future</h3>
            
            <p className="text-secondary pb-6 text-2xl font-300 font-semibold">
              <span className="pr-2"> - </span>
              What are my options ?
            </p>
            <p className="text-gray-500 pb-4 md:pl-[80px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="hidden relative">
            {/* estadisticas */}
            <div className="flex flex-col items-center justify-center z-10 w-[250px] h-[250px] xl:h-[330px] xl:w-full">
              <h5 className="text-center text-5xl font-semibold xl:px-8">Estadísitcas de Actores</h5>
              <p className="text-secondary font-custom1 opacity-40 text-[130px] xl:text-[180px] h-[150px] transform -translate-y-[40px]">60</p>
            </div>
            {/* imagen 1 */}
            <div className="bg-red-300 w-[240px] xl:w-auto">1</div>
            {/* imagen 2 */}
            <div className="relative h-[250px] xl:h-[330px] col-span-2">
              <div className="absolute h-full w-[250px] xl:w-[330px] bg-blue-900 -top-[70px] transformt translate-x-[50%]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service