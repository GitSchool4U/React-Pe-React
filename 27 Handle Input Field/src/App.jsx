import { useState } from 'react'
import './App.css'

const App = () => {

  // const [name, setName] = useState('');
  // const [email, setEamil] = useState('');

  // const nameHandler = (e) =>{
  //   setName(e.target.value)
  // }

  // const emailHandler = (e) =>{
  //   setEamil(e.target.value)
  // }

  // const clearHandler = () =>{
  //   setName("");
  //   setEamil('');
  // }

  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  })

  console.log(data)

  function inputHandler(e){
    const {name, value} = e.target;
    // setData({...data, [name]: value})
    setData(prev=>({...prev, [name] : value}))
  }

  function clearHandler() {
    setData({
      name: '',
      email: '',
      phoneNumber:'',
    })
  }


  return (
    <>
      <input
        type="text"
        name='name'
        value={data.name}
        placeholder='Enter Name'
        onChange={inputHandler}
      />

      <br /><br />

      <input
        type="text"
        name='email'
        value={data.email}
        placeholder='Enter Email'
        onChange={inputHandler}
      />

      <br /><br />

      <input
        type="number"
        name='phoneNumber'
        value={data.phoneNumber}
        placeholder='Enter Phone Number'
        onChange={inputHandler}
      />

      <br /><br />

      <button onClick={clearHandler}>Clear</button>

      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phoneNumber}</p>
    </>
  )
}

export default App