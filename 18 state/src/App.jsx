import { useState } from 'react';
import './App.css'
import Card from './Card';

function App() {

  // why state??
  // let [userData, setUserData] = useState({
  //   name:'Manas Kumar Lal',
  //   age: 21,
  //   passion: 'coding',
  // })

  // console.log(userData);


  let arr = [1,1,3,4,5];

  return (
    <>
    {arr.map((item, index)=>{
      return <Card key={index}/>
    })}
    </>
  )
}

export default App
