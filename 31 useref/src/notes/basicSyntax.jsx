import { useRef } from 'react'
import './App.css'

function App() {

  const divRef = useRef()

  const handleClick = () => {
    // console.log(divRef.current.className)
    divRef.current.style.backgroundColor = "blue"
    divRef.current.style.borderRadius = "100%"
    divRef.current.click()
  }

  return (
    <>
      <div onClick={()=>{
        console.log("div pe click hua hai")
      }} ref={divRef} className='bg-red-500 w-40 h-40'></div>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
