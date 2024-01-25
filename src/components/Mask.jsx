import { FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaLinkedinIn as LinkedinIcon, FaArrowUpLong as ArrowUp } from "react-icons/fa6";
import { useState } from "react"

const Mask = () => {

  const [ scrollStatePosition, setScrollStatePosition ] = useState(0)

  // cambiar la pocicion del scroll
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop
    setScrollStatePosition(scrollPosition)
  })

  // scrollear arriba
  const scrollToTop = () => {
    // Animar el desplazamiento hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* scroll elevator */}
      <button className={`btn-scroling-top fixed h-[80px] right-8 bottom-10 text-lg flex flex-col items-center gap-6 transition-all duration-300 hover:text-[#4DAAE4] ${scrollStatePosition > 20 ? 'visible' : 'invisible'}`} onClick={scrollToTop}>
        <ArrowUp />
        <p className="-rotate-90">Elevar</p>
      </button>
      {/* redes */}
      <div className="invisible -left-44 bottom-1/2 xl:visible fixed flex gap-8 -rotate-90">
        <p className="flex items-center gap-2">
          <FacebookIcon />
          Facebook
        </p>
        <p className="flex items-center gap-2">
          <XTwitterIcon />
          Twitter
        </p>
        <p className="flex items-center gap-2">
          <InstagramIcon />
          Instagram
        </p>
        <p className="flex items-center gap-2">
          <LinkedinIcon />
          Linkedin
        </p>
      </div>
    </>
  )
}

export default Mask