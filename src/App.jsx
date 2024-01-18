import { useLoaderData } from "react-router-dom"

function App() {

  const { actors } = useLoaderData()

  function logIn () {
    localStorage.setItem("stateLog", "authenticated")
  }

  function logOut () {
    localStorage.setItem("stateLog", "no-authenticated")
  }

  return (
    <div>
      App data : {actors}
      <div className="w-full"></div>
      <button onClick={logIn} className="bg-red-200">log in</button>
      <button onClick={logOut} className="bg-yellow-200">logout</button>
    </div>
  )
}

export default App
