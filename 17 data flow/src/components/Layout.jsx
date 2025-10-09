import React, { useState } from 'react'
import About from './About'
import Hero from './Hero'

const Layout = (props) => {
  console.log(props)

  const [count, setCount] = useState(55);

  return (
    <div className='p-[2rem] bg-gray-400 w-full'>
      Layout
      <Hero data={props.data} count={count}/>
      <About data={props.data} count={count}/>
    </div>
  )
}

export default Layout