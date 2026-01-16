import React, {memo} from 'react'

const Child = () => {

    console.log("child rendering....")

  return (
    <h1 className='child'>Child</h1>
  )
}

export default memo(Child)