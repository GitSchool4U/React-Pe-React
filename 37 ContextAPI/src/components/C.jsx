import { useMyContext } from "../MyContext"

const C = () => {

  const { count } = useMyContext()

  return (
    <div className='bg-green-600 p-10'>
      <h1>{count}</h1>
      C
    </div>
  )
}

export default C