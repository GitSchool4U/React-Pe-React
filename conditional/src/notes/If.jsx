
const App = () => {

  // const isLogin = true;
  const option = 'e'

  if (option === 'a') {
    return (
      <div>
        <h1>Component A</h1>
      </div>
    )
  }

  if (option === 'b') {
    return (
      <div>
        <h1>Component B</h1>
      </div>
    )
  }

  if (option === 'c') {
    return (
      <div>
        <h1>Component C</h1>
      </div>
    )
  }


  return (
    <h1>Ohter component</h1>
  )
}

export default App
