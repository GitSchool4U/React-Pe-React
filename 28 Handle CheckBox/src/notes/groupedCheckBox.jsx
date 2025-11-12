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

    return (
        <div className='select-none'>

            {/* html */}
            <label htmlFor="html">
                <input
                    id='html'
                    type="checkbox"
                    name='html'
                    checked={languages.html}
                    onChange={handleChange}
                />
                HTML
            </label>

            {/* css */}
            <label htmlFor="css">
                <input
                    id='css'
                    type="checkbox"
                    name='css'
                    checked={languages.css}
                    onChange={handleChange}
                />
                CSS
            </label>

            {/* html */}
            <label htmlFor="js">
                <input
                    id='js'
                    type="checkbox"
                    name='js'
                    checked={languages.js}
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
