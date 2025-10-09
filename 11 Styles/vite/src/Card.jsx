import React from 'react'
import style from './Card.module.css'

const Card = () => {

    return (
        <>
            <button className='btn'>Card</button>
            <p className={style.faltu}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni soluta, delectus unde similique asperiores aliquid perspiciatis ut non deserunt reprehenderit, beatae fugiat minus.</p>
            <h1 style={{
                backgroundColor: 'red',
            }}>Hello how are you</h1>
        </>
    )
}

export default Card