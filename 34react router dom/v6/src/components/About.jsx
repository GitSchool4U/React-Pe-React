import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div className='h-20 w-20 bg-yellow-700'></div>
      <div className='p-20 bg-red-500'>
      <Outlet />
      </div>
    </>
  )
}

export default About