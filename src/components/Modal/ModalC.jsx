export const ModalLogin = ({children}) => {
  //TODO: puedo crear componentes pequeños de html para solo tener un modal y que reciba un children y el children seria el contenido
  return (
    // pocicionamiento del modal
    <div id="modalLoginRegister" className="hidden absolute z-50 top-[50%] left-[50%] right-auto bottom-auto -mr-[50%] transform -translate-y-[50%] -translate-x-[50%]">
      {/* capa - mascara de color negro y centrado del modal */}
      <div className="bg-gradient-radial w-screen h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
