import React from 'react'

const UserCard = ({ userDetails }) => {
  console.log(userDetails)
  return (
    <div className='bg-[tomato] mt-5'>
      <h1>{userDetails.id}</h1>
      <h1>{userDetails.age > 18 ? userDetails.name : 'To Young'}</h1>
      <h1>{userDetails.age}</h1>
    </div>
  )
}

export default UserCard