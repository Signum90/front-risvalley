import { useLoaderData } from "react-router-dom"

function App() {

  const { actors } = useLoaderData()

  return (
    <div>
      App data : {actors}
    </div>
  )
}

export default App
