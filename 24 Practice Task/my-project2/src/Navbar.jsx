import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {

  const [mobileView, setMobileView] = useState(false);
  console.log(mobileView)

  return (
    <div className='w-full flex justify-between items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
      <h1 className='text-2xl font-bold'>Logo</h1>

      <div className='flex gap-9 items-center text-lg max-[720px]:hidden'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>

      <div className='text-2xl flex items-center gap-5'>
        <span>🛒</span>
        <span>🛒</span>
        <AiOutlineMenuFold onClick={() => {
          setMobileView(!mobileView);
        }} className='min-[720px]:hidden text-4xl' />
      </div>



      {/* mobile view */}
      <div className={`absolute top-0 left-0 bg-[black] h-screen w-[20rem] flex flex-col  ${mobileView ? 'translate-x-0' : '-translate-x-[100%]'} transition-all duration-300`}>
        <button onClick={() => {
          setMobileView(false)
        }} className='bg-[#242424] absolute top-[1rem] right-[1rem] p-3 rounded-2xl'>❌</button>
        <a href="" className='mt-[5rem] hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href="" className='hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href="" className='hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href="" className='hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href="" className='hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href="" className='hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
      </div>

    </div>
  )
}

export default Navbar