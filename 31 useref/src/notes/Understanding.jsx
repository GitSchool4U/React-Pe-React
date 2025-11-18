import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const countRef = useRef(0)
  // let countvar = 0;

  const handleIncrement = () => {
    setCount(count + 1)
    countRef.current += 1;
    console.log(countRef.current)
    // countvar += 1;
    // console.log(countvar)
  }

  useEffect(()=>{
    console.log("re render hua hai")
  })

  return (
    <>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
