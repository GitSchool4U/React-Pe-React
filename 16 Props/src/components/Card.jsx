import React from 'react'

const Card = ({data, isStudent, content}) => {

    const {name, age} = data;

    console.log(name, age, isStudent)

    return (
        <div className='card'>
            <div>{name}</div>
            <h1>{age}</h1>
            {content}
        </div>
    )
}

export default Card