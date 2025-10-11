import React, { useState } from 'react'

const App = () => {

    const [toggle, setToggle] = useState(false);

    if(!toggle) return null;

    return (
        <>
            {toggle ? (
                <h1>toggle true ho chuka hai</h1>
            ) : (
                <h1>toggle false ho chuka hai</h1>
            )}


            <button onClick={()=>{
                setToggle(!toggle)
            }}>Toggle</button>
        </>
    )
}

export default App