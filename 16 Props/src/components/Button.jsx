import React from 'react'

const Button = ({ children, func}) => {
    return (
        <button onClick={func}>{children}</button>
    )
}

export default Button