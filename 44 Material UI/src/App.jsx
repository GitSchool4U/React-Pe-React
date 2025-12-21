import './App.css'
import Buttons from './components/Buttons'
import UploadFile from './components/UploadFile'
import ComboBox from './components/ComboBox'
import RangeSlider from './components/RangeSlider'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import ThemeSwitch from './components/ThemeSwitch'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      primary: {
        main:'#D32F2F'
      },
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Buttons />
        <UploadFile />
        <ComboBox />
        <RangeSlider />
        <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </>
  )
}

export default App
