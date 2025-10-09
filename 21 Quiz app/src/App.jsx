import { useState } from 'react'
import './App.css'
import Questions from './components/Questions'
import Timer from './components/Timer'
import Result from './components/Result';

function App() {

  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0)

  return (
    <>

      {isOver ? (
        <Result score={score} />
      ) : (
        <>
          <Timer setIsOver={setIsOver} />
          <Questions setIsOver={setIsOver} setScore={setScore} />
        </>
      )}
    </>
  )
}

export default App
