import { useState } from 'react'
import './App.css'

function App() {
  

  // const [paymentMode, setPaymentMode] = useState('');
  const [language, setLanguage] = useState('');
  console.log(language)

  const languages = ['html', 'css', 'js', 'c++', 'c', 'java', 'python']

  return (
    <>
      <select value={language} onChange={(e) => {
        setLanguage(e.target.value)
      }}>
        <option value="">---Select below---</option>
        {languages.map((item) => {
          return (
            <option key={item} value={item}>{item.toUpperCase()}</option>
          )
        })}
      </select>
    </>
  )
}

export default App
