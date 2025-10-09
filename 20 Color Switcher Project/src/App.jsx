import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ColorBox from './components/ColorBox'

function App() {

  const colors = ['pink', 'blue', 'red', 'lightseagreen', 'tomato', 'lightcoral']

  const [selectedColor, setSelectedColor] = useState('red')


  const handleInput = (e)=>{
    console.log(e.target.value)
  }

  return (
    <>

      <h1>🎨 Color Switcher</h1>


      <div className='flex gap-4 my-7'>
        {
          colors.map((item) => {
            return (
              <Button key={item} color={item} setSelectedColor={setSelectedColor}>
                {item}
              </Button>
            )
          })
        }
      </div>


      <ColorBox color={selectedColor}/>


      <input type="text" onChange={handleInput} />
    </>
  )
}

export default App
