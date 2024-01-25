import { ModalLogin } from "./ModalC"
import { ModalHeader } from "./ModalHeader"

export const MLogin = () => {
  return (
    <ModalLogin>
      {/* anchos - altos - colores */}
      <div className="w-[500px] h-[700px] bg-white text-black rounded-lg p-4">
        {/* Cabecerra */}
        <ModalHeader />
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
    </ModalLogin>
  )
}
