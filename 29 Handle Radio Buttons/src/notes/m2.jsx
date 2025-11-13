import { useState } from 'react'
import './App.css'

function App() {

  const [selectedMode, setSelectedMode] = useState('UPI');
  console.log(selectedMode)

  const payments = [
    { id: 'UPI', info: 'Instant transfer via upi apps' },
    { id: 'Card', info: 'pay using credit or debit card' },
    { id: 'COD', info: 'pay when the order arrives' },
  ]

  return (
    <div className='select-none'>

      {payments.map(item => {
        return (
          <label key={item.id} htmlFor={item.id}>
            <input
              id={item.id}
              type="radio"
              name='payments'
              value={item.id}
              checked={selectedMode === item.id}
              onChange={(e) => setSelectedMode(e.target.value)}
            />
            {item.id}
          </label>
        )
      })}

      <p>Mode of payment : {selectedMode}</p>
      <p>Details :  {payments.find(obj => obj.id === selectedMode).info}</p>

    </div>
  )
}

export default App
