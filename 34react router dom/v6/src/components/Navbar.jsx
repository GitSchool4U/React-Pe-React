import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const isLoggedIn = false;

  const handleClick = () => {
    if (isLoggedIn) navigate('/about')
  }

  const arr = ['a', 'b', 'c', 'd']

  return (
    <>
      <div className='bg-[lightseagreen] flex gap-5'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Help</NavLink>
        {arr.map((item) => {
          return (
            <NavLink key={item} to={`/contact/${item}`} className={({ isActive }) => isActive ? 'text-red-500' : ''}>{item}</NavLink>
          )
        })}
      </div>

      <button onClick={handleClick}>
        Navigate to About
      </button>
    </>
  )
}

export default Navbar