import { useState } from 'react'
import './App.css'

function App() {

  // const [isHtml, setIsHtml] = useState(true)
  // const [isCss, setIsCss] = useState(true)
  // const [isJs, setIsJs] = useState(true)

  const [formData, setFormData] = useState({
    email: '',
    tc: false,
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  function submitHandler(e){
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='select-none'>

      <form onSubmit={submitHandler}>

        <input
          type="email"
          placeholder='Enter email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        {/* terms and conditions */}
        <label htmlFor='tc'>
          <input
            id='tc'
            type="checkbox"
            name={'tc'}
            checked={formData.tc}
            onChange={handleChange}
          />
          Terms and conditions
        </label>

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App
