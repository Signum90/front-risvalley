import authStore from "../../Context/authStore"

async function logIn () {

  event.preventDefault()

  const correo = document.getElementById('email').value
  const pass = document.getElementById('pass').value

  // const formData = new FormData(correo, pass)
  const data = JSON.stringify({ correo : correo, password: pass })
  // const formData = new FormData()

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  };

  try {
    const log = await fetch('http://localhost:8282/api/auth/login', requestOptions);
    const res = await log.json()
  } catch (error) {
    console.error('Error fetch:', error);
  }

}

const Login = () => {

  const {login} = authStore()

  return (
    <section className="w-full flex justify-center px-4 my-[120px]">
      {/* contenedor responsibe */}
      <div className="xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col gap-4 lg:justify-between">
        <form onSubmit={logIn} className="flex flex-col hidden">
          <input id="email" className="bg-transparent" placeholder="text" type="text" />
          <input id="pass" className="bg-transparent" placeholder="password" type="pass" />
        </form>
        <button type="sumbmit" className="p-2 bg-quaternary w-[100px]" onClick={() => {login()}}>
          Simular Login como admin
        </button>
      </div>
    </section>
  )
}

export default Login