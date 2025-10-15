import { useRef } from 'react'
import './App.css'

const App = () => {

  const inputRef = useRef(null);

  function submit(){
    console.log(inputRef.current.value)
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder='Enter name' />
      <br /><br />
      <button onClick={submit}>Submit</button>
    </>
  )
}

export default App