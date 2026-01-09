import React, { useEffect, useState } from 'react'

const Alpha = () => {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("mounting...")
    // },[count])

    useEffect(()=>{
        console.log("mounting.....")

        return ()=>{
            console.log("umounting.....")
        }
    },[])

    return (
        <>
        <div>Alpha {count}</div>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        </>
    )
}

export default Alpha