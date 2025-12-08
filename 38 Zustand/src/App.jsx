import './App.jsx'
import Navbar from './components/Navbar.jsx'
import useMyStore from './store.js'

const App = () => {

  return (
    <div>
      <Navbar />
    </div>
  )
}
export default App


{/*

  Global State (Store)

  App
  Navbar
  Home
  About
  Footer
  Card



  Create Store
  Use Store
  
*/}

{/*

  1. create -> use
  2. set karne ke liye --> set(), and get karne ke liye --> get()
  3. subscription is directly dependent to rerender
  4. Pure store ka subscription ek baari me nahi lena hai (performance down ho jaayega)
  5. middlewares use kar skte ho
  6. persist middleware --> to save date into local or session storage
  7. devtools middleware --> visual representation of state and actions
  
*/}