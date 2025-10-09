import React, { useState } from 'react'

const Header = (props) => {

  const [headerData, setHeaderData] = useState('header ka data hai ye')

  function changeData() {
    props.func(headerData)
  }

  return (
    <div onClick={changeData} className='bg-red-500'>Header</div>
  )
}

export default Header