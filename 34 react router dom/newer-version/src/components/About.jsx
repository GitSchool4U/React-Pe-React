import { useLoaderData } from "react-router-dom"

const About = () => {

  const data = useLoaderData();
  console.log(data)

  return (
    <>
      <div>About</div>
      {data.map((item) => {
        return (
          <p key={item}>{item.name}</p>
        )
      })}
    </>
  )
}

export default About