export const ModalLogin = () => {
  //TODO: puedo crear componentes pequeños de html para solo tener un modal y o que reciba un children y el children seria el contenido
  return (
    // pocicionamiento del modal
    <div id="modalLoginRegister" className="absolute z-50 top-[50%] left-[50%] right-auto bottom-auto -mr-[50%] transform -translate-y-[50%] -translate-x-[50%]">
      {/* capa - mascara de color negro y centrado del modal */}
      <div className="bg-gradient-radial w-screen h-screen flex items-center justify-center">
        {/* modal - anchos y altos */}
      <div className="w-[500px] h-[700px] bg-white text-black rounded-lg">
        <h1 className="">Login</h1>
        <form action="">
          <input type="text" />
        </form>
      </div>
      </div>
    </div>
  )
}
