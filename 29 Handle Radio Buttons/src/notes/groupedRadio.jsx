import { useState } from 'react'
import './App.css'

function App() {

  const [gender, setGender] = useState('other');
  const genders = ['html', 'css', 'js', 'react','next js', 'mongodb', 'aws', 'sql','docker']

  console.log(gender)
  return (
    <>

      {genders.map(item => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="radio"
              name='gender'
              value={item}
              checked={gender === item}
              onChange={(e) => setGender(e.target.value)}
            />
            {item}
          </label>
        )
      })}

    </>
  )
}

export default App
