import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LiaPenSolid } from "react-icons/lia";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="h-full w-full">
      {/* form */}
      <section className="px-4 mt-12 w-full h-fit flex flex-col justify-center items-center">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col">
          {/* titulo */}
          <div className="h-fit text-4xl md:text-6xl">
            <p className="font-custom1">Have a <span className="text-quaternary">cool project ?</span></p>
            <p className="font-custom1">Get in touch!</p>
          </div>
          {/* form - image */}
          <div className="relative w-full h-full py-14 flex flex-col">
            <img src="https://winframedemo.online/wp-content/uploads/2023/08/img-44-copyright.jpg" className="w-full md:w-[70%] xl:w-[60%]" alt="img-demo" />
            <form className="bg-[#17111d] p-6 lg:p-12 flex flex-col justify-start md:absolute top-0 right-0 md:w-[50%] md:h-[85%] lg:h-[75%] xl:h-[80%] 2xl:h-[70%]">
              <div className="relative w-full">
                <input type="text" placeholder="Name" className="pl-8 w-full bg-transparent border-b p-4 text-lg text-gray-500 focus:outline-none focus:text-white" />
                <FaRegUser className="text-md lg:text-[20px] absolute top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <div className="relative w-full">
                <input type="email" placeholder="Email" className="pl-8 w-full bg-transparent border-b p-4 text-lg text-gray-500 focus:outline-none focus:text-white" />
                <MdOutlineEmail className="text-md lg:text-[20px] absolute top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <div className="relative w-full">
                <textarea name="help" placeholder="How can help you ?" className="resize-none pl-8 w-full h-[100px] bg-transparent border-b p-4 text-lg text-gray-500 focus:outline-none focus:text-white"></textarea>
                <LiaPenSolid className="text-md lg:text-[20px] absolute top-[19%] text-gray-500" />
              </div>
              <div className="flex items-center gap-4 my-8">
                <input type="checkbox" className="bg-transparent" />
                <p>I agree that my submitted data is being collected and stored.</p>
              </div>
              <button className="bg-quaternary w-44 font-custom1 p-4 rounded-full flex gap-2 items-center">
                <FiSend className="text-2xl" />
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* contactos */}
      <section className="px-4 w-full flex justify-center items-center">
        {/* contenedor responsibe */}
        <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* phone */}
          <div className="font-custom1 text-gray-600 relative flex items-center justify-center w-full">
            <p className="font-custom1 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">01</p>
            <p className="text-center font-custom1 absolute text-primary hover:text-quaternary top-1/2 -translate-y-[50%] text-2xl lg:text-3xl flex items-center gap-2">
              +1 8000 2432676
            </p>
          </div>
          {/* direction */}
          <div className="font-custom1 text-gray-600 relative flex items-center justify-center w-full">
            <p className="font-custom1 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">02</p>
            <p className="text-center font-custom1 absolute text-primary hover:text-quaternary top-1/2 -translate-y-[50%] text-2xl lg:text-3xl flex items-center gap-2">
              785 15th Street, Office 478 Berlin, De 81566
            </p>
          </div>
          {/* email */}
          <div className="font-custom1 text-gray-600 relative flex items-center justify-center w-full sm:col-span-2 lg:col-span-1">
            <p className="font-custom1 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">03</p>
            <p className="text-center font-custom1 absolute text-primary hover:text-quaternary top-1/2 -translate-y-[50%] text-2xl lg:text-3xl flex items-center gap-2">
              info@example.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact