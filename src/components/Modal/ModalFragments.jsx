import { ModalContainer } from "./ModalContainer"
import { FaXmark } from "react-icons/fa6"
import { closeModal } from "./ModalActions"

// estrucutra modal - login
export const MLogin = () => {
  return (
    <ModalContainer>
      {/* anchos - altos - colores */}
      <div className="w-[500px] h-[700px] bg-white text-black rounded-lg p-4">
        {/* Cabecerra */}
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-3xl">Login</h5>
          <FaXmark className="text-2xl cursor-pointer" onClick={closeModal} />
        </div>
        {/* formulario de datos */}
        <form className="border flex flex-col gap-4 items-start [&>label]:flex [&>label]:gap-4 [&>label>input]:outline-none [&>label>input]:px-2" action="submit">
          <label htmlFor="login-email">
            Email
            <input id="login-email" className="border border-black" type="text" />
          </label>
          <label htmlFor="login-pass">
            Password
            <input id="login-pass" className="border border-black" type="text" />
          </label>
          <button type="submit" className="bg-azul text-white rounded-sm mt-2 ml-4">
            Ingresar
          </button>
        </form>
      </div>
    </ModalContainer>
  )
}

// estrucutura modal - registro
export const MRegister = () => {
  return (
    <ModalContainer>
      {/* anchos - altos - colores */}
      <div className="w-[500px] h-[700px] bg-white text-black rounded-lg p-4">
        {/* Cabecerra */}
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-3xl">Registro</h5>
          <FaXmark className="text-2xl cursor-pointer" onClick={closeModal} />
        </div>
        {/* formulario de datos */}
        <form className="border flex flex-col gap-4 items-start [&>label]:flex [&>label]:gap-4 [&>label>input]:outline-none [&>label>input]:px-2" action="submit">
          <label htmlFor="login-email">
            Email
            <input id="login-email" className="border border-black" type="text" />
          </label>
          <label htmlFor="login-pass">
            Password
            <input id="login-pass" className="border border-black" type="text" />
          </label>
          <button type="submit" className="bg-azul text-white rounded-sm mt-2 ml-4">
            Ingresar
          </button>
        </form>
      </div>
    </ModalContainer>
  )
}
