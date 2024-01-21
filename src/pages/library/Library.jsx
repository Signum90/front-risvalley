import { useLoaderData } from "react-router-dom"

const Library = () => {

  const library = useLoaderData()

  return (
    <div className="text-black">Library : {library}</div>
  )
}

export default Library