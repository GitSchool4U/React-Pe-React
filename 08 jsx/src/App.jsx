import React from 'react'
import './App.css'
import Header from './Header'

function App() {

  let name = "Manas Kumar Lal"
  // let age = 17;
  // let isOutOfStock = true;

  // function greet() {
  //   return "My name is mkl"
  // }


  // let arr = ['spider man', 'spider', 'wanda', 'captain']

  // let alpha = <p>Hello how {2 + 2} are you</p>

  let user = {
    name: 'Manas kumar lal',
    age: 21,
  }

  return (
    <div>
      {/* <h1>hello {greet()} jsx</h1>
      <h1>{age>=18?'You can drive':'You can not drive'}</h1> */}

      {/* <h1 style={{
        maxWidth: "1280px",
        "margin": "0 auto",
        "padding": "2rem",
        "textAlign": "center",
        "backgroundColor":'red',
      }}>Hello style</h1> */}


      {/* {age>18 ? <p style={{color:'green'}}>You can drive</p> : <p style={{color:'red'}}>You can not drive</p>} */}


      {/* {isOutOfStock && <p>Out of stock</p>} */}


      {/* {arr.map((element)=>{
        return <p key={element}>{element}</p>
      })} */}


      {/* {alpha} */}

      {/* 
      <Header title="alpha"/>
      <Header title={alpha}/> */}


      {/* <h1>Hello how are you</h1> */}

      {/* <h1 className='heading'>Hello</h1> */}

      {/* {React.createElement('h1', null, "Hello how are you")} */}


      {/* {React.createElement('h1', { className: 'heading', style: {
        backgroundColor:'red',
      } }, 'hello')} */}


      {/* <div>
          <p>Hello</p>
        </div>
 */}

      {/* {React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            {style:{backgroundColor:'red'}},
            'Hello'
          )
        )} */}


      {/* <h1>My name is {name}</h1> */}


      {/* {React.createElement(
          'h1',
          null,
          // `My name is ${name}`
          // 'My name is ',
          // name
          React.createElement(
            'p',
            {style:{backgroundColor:'red'}},
            'Hello'
          ),
          React.createElement(
            'p',
            {style:{backgroundColor:'red'}},
            'Hello'
          ),
          React.createElement(
            'p',
            {style:{backgroundColor:'red'}},
            'Hello'
          )
        )} */}


      {/* <div className='card'>
        <h1>Hello {user.name}</h1>
        <p>You are {user.age + 1} years old.</p>
      </div> */}
{/* 
      {React.createElement(
        'div',
        {className:'card'},
        React.createElement('h1',null, `Hello ${user.name}`),
        React.createElement('p',null, `You are ${user.age + 1} years old.`),
      )} */}

      {/* <h1 className="">lakjdslfkj</h1> */}


<img src="" alt="" />
<br />
<hr />
    </div>
  )
}

export default App
