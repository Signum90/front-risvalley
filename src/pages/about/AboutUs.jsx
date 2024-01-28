import { useLoaderData } from "react-router-dom"

const AboutUs = () => {

  const { team } = useLoaderData()
  console.log(team)

  return (
    <div className="h-full w-full">
      {/*  hero image */}
      <section className="w-full h-screen flex flex-col justify-center items-center">
        nosotros
      </section>
    </div>
  )
}

export default AboutUs