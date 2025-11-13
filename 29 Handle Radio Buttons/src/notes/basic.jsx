import { useState } from 'react'
import './App.css'

function App() {

  const [gender, setGender] = useState('other');
  console.log(gender)
  return (
    <>

      <label htmlFor="male">
        <input
          id='male'
          type="radio"
          name='gender'
          value={'male'}
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <br />

      <label htmlFor="female">
        <input
          id='female'
          type="radio"
          name='gender'
          value={'female'}
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <br />

      <label htmlFor="other">
        <input
          id='other'
          type="radio"
          name='gender'
          value={'other'}
          checked={gender === 'other'}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>

    </>
  )
}

export default App
