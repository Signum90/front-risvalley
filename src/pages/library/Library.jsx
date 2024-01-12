import { useLoaderData } from "react-router-dom"

const Library = () => {

  const { library } = useLoaderData()

  return (
    <div>Library : {library}</div>
  )
}

export default Library