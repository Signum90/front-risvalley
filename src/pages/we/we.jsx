import { useLoaderData } from "react-router-dom"

const We = () => {

  const { team } = useLoaderData()

  return (
    <div>Nosotros, equipo : {team}</div>
  )
}

export default We