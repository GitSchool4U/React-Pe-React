import React from 'react'

const Comp = ({title="Falna", age=21}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Comp