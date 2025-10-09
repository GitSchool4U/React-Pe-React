import React from 'react'

const Button = (props) => {
  return (
     <button className="bg-[tomato] rounded-lg px-4 py-2">{props.title}</button>
  )
}

export default Button