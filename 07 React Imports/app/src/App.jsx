import './App.css'
import Header, { Card, Card2 } from '../components/Header.jsx'
import reactLogo from './assets/react.svg'
import { sum } from './utilities.js'
import data from './data.json'
// import axios from 'axios'
// import {BrowserRouter} from 'react-router-dom'
// import {useState} from 'react'

function App() {

  let result = sum(1, 2)
  console.log(result);
  console.log(data)

  return (
    <>
      <h1 className='heading'>App</h1>
      <Header />
      <Card />
      <Card2 />
      <img src={reactLogo} alt="" />
    </>
  )

}

export default App
