import { FaFacebookF as FacebookIcon, FaXTwitter as XTwitterIcon, FaInstagram as InstagramIcon, FaLinkedinIn as LinkedinIcon, FaArrowUpLong as ArrowUp } from "react-icons/fa6";

const Mask = () => {
  return (
    <>
      {/* scroll elevator */}
      <div className="fixed h-[80px] right-8 bottom-10 text-lg flex flex-col items-center gap-6">
        <ArrowUp />
        <p className="-rotate-90">Elevar</p>
      </div>
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