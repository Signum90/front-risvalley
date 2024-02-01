import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import CarrouselText from "../../components/CarrouselText"
import { FaCaretRight } from "react-icons/fa6"

// añadirle el plugin a gsap
gsap.registerPlugin(TextPlugin)

function Questions () {

  const machineTextRef = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline()

    const words = ['creative', 'projects', 'designs', 'ideas']
    const pauseDuration = 3
    const deleteDuration = 0.1

    words.forEach((word) => {

      // Añadir letras una por una
      for (let i = 0; i < word.length; i++) {
        tl.to(machineTextRef.current, { duration: 0.1, text: { value: word.substr(0, i + 1), ease: 'none' } });
      }

      // Pausa entre palabras
      tl.to({}, { duration: pauseDuration })

      // Borrar letras una por una
      for (let i = word.length - 1; i >= 0; i--) {
        tl.to(machineTextRef.current, { duration: deleteDuration, text: { value: word.substr(0, i), ease: 'none' } });
      }
    })

    return () => tl.kill()

  }, [])

  const itemsDetails = [
    { title: 'What are my options?', description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'},
    { title: 'Can I switch to a different plan?', description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'},
    { title: 'Do you offer non-disclosure signature?', description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'},
    { title: 'Do you issue refunds?', description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'},
  ]

  return (
    <div className="h-full w-full">
      {/* preguntas */}
      <section className="w-full flex justify-center px-6 h-[60vh] items-center">
        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[650px] xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col items-center">
          {itemsDetails.map( item => (
            <details key={item.title} className="w-full border-b-2 border-secondary py-2">
              <summary className="font-bold text-2xl py-6 cursor-pointer">{item.title}</summary>
              <p className="pb-4">{item.description}</p>
            </details>
          ))}
        </div>
      </section>
      {/* carrousel */}
      <CarrouselText />
      {/* hero image */}
      <section id='heroImg_questions' className="w-full flex justify-center px-6 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] items-center flex-col text-3xl md:text-6xl">
        <p className='font-custom1' >We make the</p>
        <p className='font-custom1' >creative <span ref={machineTextRef}></span><span className='animate-pulse duration-75'>_</span></p>
      </section>
      {/* video presentation */}
      <section className="w-full flex justify-center px-8 my-[120px]">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* We develop & create digital future */}
          <div>
            <h3 className="w-[90%] txt-amarillo pb-8 font-semibold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">We develop & create digital future</h3>
            <p className="text-gray-500 pb-8 max-w-[500px]">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            {/* video play */}
            <div className='flex flex-wrap md:flex-col lg:flex-row justify-start gap-6'>
              <button className="w-[200px] h-[50px] text-xl px-4 rounded-3xl transition-colors duration-500 border-2 text-quaternary border-quaternary hover:bg-quaternary hover:text-white">
                Our Services
              </button>
              <div className="flex flex-nowrap items-center gap-4">
                {/* play video - modal */}
                <button className="p-4 bg-gray-900 rounded-full text-xl">
                  <FaCaretRight />
                </button>
                <p className="font-semibold text-lg">Video Presentación</p>
              </div>
            </div>
          </div>
          {/* estadisticas actores */}
          <div className="flex flex-col h-full justify-between gap-8 md:gap-16">
            <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-16'>
              <p className='h-full font-semibold text-4xl md:text-5xl lg:text-6xl text-primary'>100+</p>
              <div className='flex flex-col gap-6'>
                <h5 className='font-bold text-2xl'>Project Complete</h5>
                <p className='text-gray-500 w-full max-w-[400px]'>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
              </div>
            </div>
            <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-16'>
              <p className='h-full font-semibold text-4xl md:text-5xl lg:text-6xl text-primary'>2587</p>
              <div className='flex flex-col gap-6'>
                <h5 className='font-bold text-2xl'>Creative ideas</h5>
                <p className='text-gray-500 w-full max-w-[400px]'>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Questions