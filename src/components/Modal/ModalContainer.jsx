export const ModalContainer = ({children}) => {
  //TODO: puedo crear componentes pequeños de html para solo tener un modal y que reciba un children y el children seria el contenido
  return (
    // pocicionamiento del modal
    <div id="modalContainer" className="hidden fixed z-50 top-[50%] left-[50%] right-auto bottom-auto -mr-[50%] transform -translate-y-[50%] -translate-x-[50%]">
      {/* fondo con desenfoque */}
      <div className="w-screen h-screen fixed inset-0 backdrop-blur-sm">
      </div>
      {/* capa - mascara de color negro y centrado del modal */}
      <div className="relative w-screen h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
