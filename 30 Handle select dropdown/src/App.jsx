import { useState } from 'react'
import './App.css'
import data from './notes/data'

function App() {

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  console.log(selectedCountry, selectedCity)

  return (
    <>
      <select value={selectedCountry} onChange={(e) => {
        setSelectedCountry(e.target.value)
        setSelectedCity('')
      }}>
        <option value="">---Select country---</option>
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>{item.toUpperCase()}</option>
          )
        })}
      </select>


      {selectedCountry && (
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">---Select city---</option>
          {data[selectedCountry].map((item) => {
            return (
              <option key={item} value={item}>{item.toUpperCase()}</option>
            )
          })}
        </select>
      )}

      <p>Country: {selectedCountry}, city: {selectedCity}</p>
    </>
  )
}

export default App
