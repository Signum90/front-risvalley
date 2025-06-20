import { FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaLinkedinIn as LinkedinIcon, FaArrowUpLong as ArrowUp } from "react-icons/fa6";
import { useState } from "react"
import { Link } from "react-router-dom";

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
      <button className={`btn-scroling-top z-10 fixed h-[80px] right-8 bottom-10 text-lg flex flex-col items-center gap-6 transition-all duration-300 hover:text-[#4DAAE4] ${scrollStatePosition > 20 ? 'visible' : 'invisible'}`} onClick={scrollToTop}>
        <ArrowUp />
        <p className="-rotate-90">Elevar</p>
      </button>
      {/* redes */}
      <div className="invisible z-10 -left-44 bottom-1/2 xl:visible fixed flex gap-8 -rotate-90">
        <Link to="" target="_blank" className="flex items-center gap-2 hover:text-gray-500 transition-all duration-300">
          <FacebookIcon />
          Facebook
        </Link>
        <Link to="" target="_blank" className="flex items-center gap-2 hover:text-gray-500 transition-all duration-300">
          <XTwitterIcon />
          Twitter
        </Link>
        <Link to="" target="_blank" className="flex items-center gap-2 hover:text-gray-500 transition-all duration-300">
          <InstagramIcon />
          Instagram
        </Link>
        <Link to="" target="_blank" className="flex items-center gap-2 hover:text-gray-500 transition-all duration-300">
          <LinkedinIcon />
          Linkedin
        </Link>
      </div>
    </>
  )
}

export default Mask