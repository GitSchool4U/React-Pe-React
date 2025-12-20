import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Employees from './component/employees/Employees'
import EmployeePopup from './component/employeePopup/EmployeePopup'
import DeletePopup from './component/deletePopup/DeletePopup'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployees } from './store/features/employee/employee.thunk'

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getEmployees());
  },[])

  return (
    <div className='min-h-screen w-full flex flex-col'>

      <EmployeePopup />
      <DeletePopup/>

      <Navbar />

      <div className='flex-1 py-10'>
        <Employees />
      </div>

      <Footer />
    </div>
  )
}

export default App
