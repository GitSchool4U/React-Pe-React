import './App.css'
import axios from 'axios'

const App = () => {

  const config = {
    url: '/users',
    baseURL:'https://jsonplaceholder.typicode.com'
    // headers: {
    //   Accept: 'application/json',
    //   // 'Content-Type': 'application/json' 
    //   Authority: 'Bearer laksjdfljalskdf'
    // },
    // timeout:'200' //ms
    // data:{
    //   name:'aldjflajsdf'
    // }
    // params:{
    //   name:"mkl",
    //   age:21,
    // },
    // data:{
    //   name:'manas'
    // }
  }

  const fetchData = async () => {
    const response = await axios(config)
    console.log(response)
  }

  return (
    <div>
      <button onClick={fetchData}>FetchData</button>
    </div>
  )
}

export default App