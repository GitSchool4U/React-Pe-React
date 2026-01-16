import { useEffect, useState } from 'react'
import './App.css'
import Alpha from './components/Alpha'

function App() {

  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: 'mkl',
  })

  useEffect(() => {
    console.log('parent rendering....')
  })

  return (
    <>

      <Alpha data={obj} />
      <input value={obj.name} onChange={(e) => setObj({...obj, name: e.target.value})} type="text" placeholder='Enter name' />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

    </>
  )
}

export default App
