import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Comp from './components/Comp'
import Layout from './components/Layout'

function App() {


  function button1Click() {
    console.log("button 1 click hua hai bhailog")
  }

  function button2Click() {
    console.log("button two click hua hai bhailog")
  }


  const obj = {
    title:'manas',
    age:21,
  }

  return (
    <div className='layout'>
      {/* <Card data={obj} isStudent={true} content={
        <>
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio a nam itaque excepturi neque, id nemo eum fugit quasi!</p>
        </>
      } /> */}

      {/* <Button>
        Click Me
      </Button>

      <Button>
        Click
      </Button> */}


        {/* <Layout>
          <h1>Hello</h1>
        </Layout> */}


        <Comp {...obj}/>

    </div>
  )
}

export default App
