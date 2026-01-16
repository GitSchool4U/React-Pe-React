import { useCallback, useState } from 'react'
import './App.css'
import Child from './components/Child';

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState('mkl');

  console.log("parent rendering...")

  // normal function (recreated on every re-render)
  const handleClick1 = () => {
    console.log("mai click hua hun ", count)
  }

  // memoized function (use same reference between renders unless dependencies change)
  const handleClick = useCallback(() => {
    console.log("mai click hua hun ", count)
  }, [count])

  return (
    <>
      Parent Component
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <Child handleClick={handleClick} />
    </>
  )
}

export default App
