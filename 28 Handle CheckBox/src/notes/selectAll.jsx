import { useState } from 'react'
import './App.css'

function App() {

  // const [isHtml, setIsHtml] = useState(true)
  // const [isCss, setIsCss] = useState(true)
  // const [isJs, setIsJs] = useState(true)

  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  })

  const handleChange = (e) => {
    const key = e.target.name

    setLanguages({
      ...languages,
      [key]: e.target.checked
    })
  }

  const isAllChecked = Object.values(languages).every(Boolean)

  function handleSelectAll(e) {
    setLanguages({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked,
    })
  }

  return (
    <div className='select-none'>

      {/* Select all */}
      <label htmlFor="sa">
        <input
          id='sa'
          type="checkbox"
          name='html'
          checked={isAllChecked}
          onChange={handleSelectAll}
        />
        Select All
      </label>


      {Object.keys(languages).map(item => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="checkbox"
              name={item}
              checked={languages[item]}
              onChange={handleChange}
            />
            {item.toUpperCase()}
          </label>
        )
      })}


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
