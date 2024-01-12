import { useLoaderData } from "react-router-dom"

const Innovation = () => {

  const { challengers } = useLoaderData()

  return (
    <div>Innovation challengers : {challengers}</div>
  )
}

export default Innovation