import CarrouselText from "../../components/CarrouselText"
import { FaCaretRight } from "react-icons/fa6";
import { useEffect } from "react";
import { SiGooglecontaineroptimizedos as OpptimizedIc } from "react-icons/si"
import { PiSpiralLight } from "react-icons/pi"
import { TbCircleLetterD } from "react-icons/tb";

const services = [
  {title : 'Testing', description: 'Conceptetur adipiscing edit'},
  {title : 'Suport', description: 'Conceptetur adipiscing edit'},
  {title : 'Desing', description: 'Conceptetur adipiscing edit'},
  {title : 'Creature', description: 'Conceptetur adipiscing edit'},
]

const questionsItems = [
  {question: 'What are my options?', response : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
  {question: 'How scalable is the CRM system?', response : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
  {question: 'Can I try CRM for free?', response : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
]

const types = [
  {title: 'Optimization', icon: <OpptimizedIc className="text-7xl text-secondary"/>, description: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'},
  {title: 'Automation', icon: <PiSpiralLight className="text-7xl text-secondary"/> , description: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'},
  {title: 'Support', icon: <TbCircleLetterD className="text-7xl text-secondary"/>, description: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'},
]

const Service = () => {

  // cambiar color del sumary si esta desplegado
  useEffect(() => {

    const detalles = document.querySelectorAll('details')

    detalles.forEach((detail) => {
      detail.addEventListener('toggle', () => {
        const summary = detail.querySelector('summary')

        if (detail.open) {
          summary.classList.add('text-secondary')
        } else {
          summary.classList.remove('text-secondary')
        }
      })
    })

  }, [])

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
          {/* preguntas */}
          <div className="h-fit">
            <button className="p-4 bg-gray-900 rounded-full text-xl mb-4"> <FaCaretRight /> </button>
            <h3 className="pb-6 text-2xl md:text-4xl">We develop and create digital future</h3>
            {questionsItems.map( (item, index) => (
              <details key={item.question} className={` md:pr-20 py-4 ${index == 2 ? '' : 'border-b-[0.1px]'} border-gray-300`}>
                <summary className="text-primary flex-row-reverse justify-end gap-8 items-center font-semibold text-xl cursor-pointer">{item.question}</summary>
                <p className="text-sm text-gray-400 pt-2">{item.response }</p>
              </details>
            ))}
          </div>
          {/* imagen and stadistics */}
          <div className="relative flex justify-center sm:px-8 md:px-0">
            {/* estadisticas */}
            <img
            className="w-full min-h-[400px] max-[530px] sm:w-[600px] sm:h-[500px] md:min-w-[260px] md:min-h-[300xp] xl:w-[570px] xl:h-[600px]"
              src="https://winframedemo.online/wp-content/uploads/elementor/thumbs/img-43-copyright-qieyo5yi6roviop84oyvuu3do826q3g3j7vz1r5rhi.jpg" alt="" />
            {/* conteo */}
            <div className="absolute h-[170px] bottom-0 w-full flex gap-6 justify-between sm:justify-start md:h-[200px] transform md:-translate-x-6 lg:-translate-x-12 lg:-translate-y-6">
              {/* conteo 1 */}
              <div className="h-full md:w-[240px] lg:w-[290px] bg-black p-4 lg:p-8 flex flex-col gap-2">
                <p className="font-custom1 text-lg" >People</p>
                <p className="text-secondary font-custom1 text-5xl">100+</p>
                <p className="font-semibold text-lg">Adipiscing elit, do eiusm.</p>
              </div>
              {/* conteo 2 */}
              <div className="h-full md:w-[240px] lg:w-[290px] bg-black p-4 lg:p-8 flex flex-col gap-2">
                <p className="font-custom1 text-lg" >Offices</p>
                <p className="text-secondary font-custom1 text-5xl">16</p>
                <p className="font-semibold text-lg">Adipiscing elit, do eiusm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* types */}
      <section className="w-full flex justify-center px-4 my-[110px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container grid sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-8">
          {types.map( (type, index) => (
            <div key={type.title}>
              <div className="relative lg:translate-y-8">
                <p className="font-custom1 text-[80px] lg:text-[90px] xl:text-[110px] text-gray-600">{"0"+(index +1)}</p>
                <p className="absolute top-1/2 transform -translate-y-[50%] font-bold text-2xl lg:text-3xl flex items-center gap-2">
                  {type.icon}
                  {type.title}
                </p>
              </div>
              <p className="text-gray-400 text-md transform">{type.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Service