import { useEffect, useState } from 'react'
import './App.css'
import Alpha from './components/Alpha';
import Form from './components/Form';
import Users from './components/Users';

function App() {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* {toggle && <Alpha />} */}
      {/* {toggle && <Form/>} */}
      {toggle && <Users/>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  )
}

export default App
