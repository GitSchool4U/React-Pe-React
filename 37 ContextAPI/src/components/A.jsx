import C from './C'
import D from './D'
import { useMyContext } from '../MyContext'

const A = () => {

  const {count} = useMyContext();

  return (
    <div className='bg-amber-800 p-10'>
      A
      <h1>{count}</h1>
      <C />
      <D />
    </div>
  )
}

export default A