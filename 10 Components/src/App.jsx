import { Component } from 'react'
import './App.css'
import Card from './components/Card'

// function square(para1, para2) {
//   return (
//     <div className='square'>
//       <h1>{para1}</h1>
//       <h1>{para2}</h1>
//     </div>
//   )
// }

// function Square(props) {

//   return (
//     <div className='square'>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   )
// }

// class Square extends Component {
//   render() {
//     return (
//       <div className='square'>
//         <h1>{this.props.name}</h1>
//         <h1>{this.props.age}</h1>
//       </div>
//     )
//   }
// }

function App() {

  return (
    <>
      {/* <h1>Hello React Pe React</h1> */}

      {/* function wala approach */}
      {/* {square("world","Hello")} */}

      {/* component wala approach */}
      {/* <Square name="manas" age={21} /> */}

      <div className='grid'>
        <Card title="Pehla" description="Pehla description"/>
        <Card title="Dusra" description="Pehla description"/>
        <Card title="Tesra" description="Pehla description"/>
        <Card title="Chotha" description="Pehla description"/>
        <Card title="Phachwa" description="Pehla description"/>
      </div>

    </>
  )
}

export default App
