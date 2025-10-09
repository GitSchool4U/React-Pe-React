import './App.css'
import { IoMdHome } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { GrLogout } from "react-icons/gr";
import { RiAddLine, RiAmazonFill, RiFolderUserLine  } from "react-icons/ri";

function App() {

  return (
    <>
      <h1>Icons</h1>
      <IoMdHome/>
      <TiHome/>
      <GrLogout/>
      <RiAddLine/>
      <RiAmazonFill className='text-yellow-500 text-7xl'/>
      <RiFolderUserLine className='text-red-500'/>
    </>
  )
}

export default App
