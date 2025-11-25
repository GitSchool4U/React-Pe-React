import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import DetailedContact from './components/DetailedContact'
import { Navigate } from 'react-router-dom'
import A1 from './components/A1'
import A2 from './components/A2'

function App() {

  console.log(window.history)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='a1' element={<A1 />} />
          <Route path='a2' element={<A2 />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:id' element={<DetailedContact />} />
        <Route path='/help' element={<Navigate to={'/'} replace />} />
      </Routes>
    </>
  )
}

export default App
