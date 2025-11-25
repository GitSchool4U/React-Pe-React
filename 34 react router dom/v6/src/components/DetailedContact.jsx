import React from 'react'
import { useParams } from 'react-router-dom'

const DetailedContact = () => {

    const params = useParams();

  return (
    <div className='page'>DetailedContact: {params.id}</div>
  )
}

export default DetailedContact