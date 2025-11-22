import './App.css'
import axios from 'axios'

function App() {

  const fetchData = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json()
    // console.log(data)

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response)=>response.json())
    // .then(data => console.log(data))

    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
  }

  return (
    <>
      <h1 className='bg-red-500'>Hello School4U</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
