import { useMyContext } from "../MyContext"

const F = () => {

  const { setCount } = useMyContext();

  return (
    <div className='bg-cyan-800 p-5'>
      F
      <button onClick={() => setCount(prev => prev + 1)}>Count</button>
    </div>
  )
}

export default F