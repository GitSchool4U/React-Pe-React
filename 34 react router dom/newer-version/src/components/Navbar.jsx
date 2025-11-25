import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <div className='bg-[lightseagreen] flex gap-5'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Help</NavLink>
      </div>
    </>
  )
}

export default Navbar