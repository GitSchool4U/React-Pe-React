import Stack from '@mui/material/Stack'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Box from '@mui/material/Box'

function App() {

  return (
    <>
    {/* <Box > */}
      <Navbar />
    {/* </Box> */}

      <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
        <Sidebar /> 
        <Feed/>
        <Rightbar/>
      </Stack>
    </>
  )
}

export default App
