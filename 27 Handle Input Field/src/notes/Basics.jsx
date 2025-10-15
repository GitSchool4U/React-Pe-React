import { useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState('')

  return (
    <>
      <input type="text" value={state} placeholder='Enter name' onChange={(e) => {
        setState(e.target.value)
      }} />

      <br />
      <br />

      <button onClick={() => setState('')}>Clear</button>

      <h1>{state}</h1>
    </>
  )
}

export default App
