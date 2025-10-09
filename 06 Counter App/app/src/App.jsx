import { useState } from 'react';
import './App.css'
import Button from './components/Button'

function App() {

  let [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>

      <div className='buttons'>
        {/* <button onClick={increment}>➕ INCREMENT</button>
        <button onClick={decrement}>➖ DECREMENT</button>
        <button onClick={reset}>🔄️ RESET</button> */}
        <Button text="ICREMENT" func={increment}/>
        <Button text="DECREMENT" func={decrement}/>
        <Button text="RESET" func={reset}/>
      </div>
    </>
  )
}

export default App
