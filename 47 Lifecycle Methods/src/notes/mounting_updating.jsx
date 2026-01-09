import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(10)

  useEffect(() => {
    console.log("Mounting.....")
  }, [])

  useEffect(() => {
    console.log("data change hua")
  }, [data])

  useEffect(() => {
    console.log("count change hua")
  }, [count])

  return (
    <>
      App component
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data - 1)}>Decrement</button>
    </>
  )
}

export default App
