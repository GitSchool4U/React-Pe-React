import React from 'react'
import './App.css'

function App() {

  function alpha() {
    return 5;
  }

  let arr = [5, 6, 7]

  return (
    <>
      <h1 style={{ backgroundColor: 'red' }}>Hello how are you</h1>
      {
        arr.map((elem) => {
          return elem
        })
      }
    </>
    // React.createElement(
    //   'h1',
    //   { style: { backgroundColor: 'red' } },
    //   'Hello how are you'
    // )
  )
}

export default App
