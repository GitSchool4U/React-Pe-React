import { useState } from 'react'
import './App.css'
import Popup from './Popup';

function App() {

  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  return (
    <>
    <div className='flex items-center justify-center gap-5'>
      
      <button className='bg-[black]' onClick={() => {
        setPopup(true);
      }}>Delete</button>

      <button className='bg-[black]' onClick={() => {
        setEditPopup(true);
      }}>Edit</button>
      </div>

      {/* delete */}
      <Popup
        popup={popup}
        setPopup={setPopup}
        title={'Delete'}
        description={'Are you sure you want to delete this?'}
      />



      {/* edit */}
      

      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title={'Edit'}
        description={'Are you sure you want to edit this?'}
      />



    </>
  )
}

export default App
