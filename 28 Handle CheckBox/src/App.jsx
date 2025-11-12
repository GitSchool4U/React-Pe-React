import { useState } from 'react'
import './App.css'

function App() {

  // const [isHtml, setIsHtml] = useState(true)
  // const [isCss, setIsCss] = useState(true)
  // const [isJs, setIsJs] = useState(true)

  const [languages, setLanguages] = useState([])
  console.log(languages)

  const handleChange = (e) => {
    setLanguages(prevLanuages => {
      return (
        prevLanuages.includes(e.target.value)
          ?
          prevLanuages.filter(item => item !== e.target.value)
          :
          [...prevLanuages, e.target.value]
      )
    })
  }

  return (
    <div className='select-none'>

      {/* html */}
      <label htmlFor="html">
        <input
          id='html'
          type="checkbox"
          value="html"
          checked={languages.includes('html')}
          onChange={handleChange}
        />
        HTML
      </label>

      {/* css */}
      <label htmlFor="css">
        <input
          id='css'
          type="checkbox"
          value="css"
          checked={languages.includes('css')}
          onChange={handleChange}
        />
        CSS
      </label>

      {/* html */}
      <label htmlFor="js">
        <input
          id='js'
          type="checkbox"
          value="js"
          checked={languages.includes('js')}
          onChange={handleChange}
        />
        JS
      </label>


      <br />
      <br />

      {languages.html && 'HTML Selected'}
      <br />
      {languages.css && 'CSS Selected'}
      <br />
      {languages.js && 'JS Selected'}

    </div>
  )
}

export default App
