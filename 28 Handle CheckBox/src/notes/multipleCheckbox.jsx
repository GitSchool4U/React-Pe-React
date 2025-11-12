import { useState } from 'react'
import './App.css'

function App() {

  const [isHtml, setIsHtml] = useState(true)
  const [isCss, setIsCss] = useState(true)
  const [isJs, setIsJs] = useState(true)

  return (
    <div className='select-none'>

      {/* html */}
      <label htmlFor="html">
        <input
          id='html'
          type="checkbox"
          checked={isHtml}
          onChange={(e) => setIsHtml(e.target.checked)}
        />
        HTML
      </label>

      {/* css */}
      <label htmlFor="css">
        <input
          id='css'
          type="checkbox"
          checked={isCss}
          onChange={(e) => setIsCss(e.target.checked)}
        />
        CSS
      </label>

      {/* html */}
      <label htmlFor="js">
        <input
          id='js'
          type="checkbox"
          checked={isJs}
          onChange={(e) => setIsJs(e.target.checked)}
        />
        JS
      </label>


      <br />
      <br />

      {isHtml && 'HTML Selected'}
      <br />
      {isCss && 'CSS Selected'}
      <br />
      {isJs && 'JS Selected'}

    </div>
  )
}

export default App
