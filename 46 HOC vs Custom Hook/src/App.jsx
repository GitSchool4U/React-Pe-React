import { useState } from 'react'
import './App.css'
import { useCounter } from './customHook/useCounter'
import { useCardLook } from './customHook/useCardLook';
import Alpha from './components/Alpha'

// complex logic & complex ui reuse

function App() {

  const [inputValue, setInputValue] = useState('');
  const { count, increment, decrement, setByValue } = useCounter(0)

  const AlphaWithCardLook = useCardLook(Alpha)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <input
        type="number"
        value={inputValue}
        placeholder='Enter Value'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClickCapture={() => setByValue(inputValue)}>Set Value</button>

      <AlphaWithCardLook user="Manas Kumar Lal"/>
    </>
  )
}

export default App
