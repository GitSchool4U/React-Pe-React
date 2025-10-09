import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [decVal, setDecVal] = useState(0)

  // useEffect(() => {
  //   console.log("hello mai useffect hook ke andar hon")
  // }, [count, decVal])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>

      <h1>{decVal}</h1>
      <button onClick={() => {
        setDecVal(decVal - 1)
      }}>Decrement</button>
    </>
  )
}

export default App
