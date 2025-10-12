import './App.css'

function App() {

  // function testing(event) {
  //   // console.log(event.target.value)
  //   // console.log("test kar rhe hai")
  //   setTimeout(() => {
  //     console.log(event.target.value)
  //   }, 1000);
  // }

  // function testing(name) {
  //   console.log(name)
  //   console.log("hello how are you")
  // }

  // function submitHandler(event) {
  //   event.preventDefault()
  //   console.log("submit ho gya")
  // }

  function parentHandler() {
    console.log("parent pe click hua")
  }

  function childHandler(e, name) {
    console.log(name)
    e.stopPropagation()
    console.log("child pe click hua")
  }

  return (
    <>

      <div className='bg-red-500 p-5' onClick={parentHandler}>
        Parent Click
        <button onClick={(e) => { childHandler(e, "manas") }}>child click</button>
      </div>

      {/* <form onSubmit={submitHandler} action="">
        <input type="text" placeholder='Enter name' />
        <button type="submit">Click</button>
      </form> */}

      {/* <button onClick={()=>testing('manas')}>Clicke</button> */}
      {/* <h1 className='bg-red-500'>Hello School4U</h1>
      <button onClick={function greet() {
        alert("Hello manas kumar lal")
      }}>Click Me</button>


      <input className='border border-white' type="text" onChange={handleInputBox} placeholder='Enter name' />


      <form onSubmit={handleInputBox} action="">
        <input type="text" placeholder='Enter email' />
        <button>Submit</button>
      </form> */}


      {/* <button onClick={testing}>Click</button> */}


      {/* <input type="text" placeholder='Enter name' onChange={testing}/> */}
    </>
  )
}

export default App
