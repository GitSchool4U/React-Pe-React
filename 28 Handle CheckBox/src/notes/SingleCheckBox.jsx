import { useState } from 'react'
import './App.css'

function App() {

  const [isChecked, setIsChecked] = useState(true)

  console.log(isChecked)

  const onChange = (e) =>{
    setIsChecked(e.target.checked)
  }

  return (
    <div className='select-none'>

      <label htmlFor="cb">
        <input id='cb' type="checkbox" checked={isChecked} onChange={onChange}/>
        Terms and conditions
      </label>

    </div>
  )
}

export default App
