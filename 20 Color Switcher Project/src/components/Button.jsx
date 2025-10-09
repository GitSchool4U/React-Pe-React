import React from 'react'

const Button = ({ color, setSelectedColor, children }) => {

    function setColor(){
        setSelectedColor(color)
    }

    return (
        <button onClick={setColor} style={{
            backgroundColor: color,
        }}>{children}</button>
    )
}

export default Button