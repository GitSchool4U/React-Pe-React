import React, { useEffect, useState } from 'react'

const Form = () => {

    const [name, setName] = useState(localStorage.getItem('name') || '');

    useEffect(()=>{
        return ()=>{
            localStorage.clear()
        }
    },[])

    return (
        <div>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    localStorage.setItem('name', e.target.value)
                }}
                type="text" placeholder='Enter name'
            />
        </div>
    )
}

export default Form