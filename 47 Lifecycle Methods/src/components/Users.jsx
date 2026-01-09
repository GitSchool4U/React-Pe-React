import React, { useEffect, useState } from 'react'

const Users = () => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])

    useEffect(() => {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setData(data);
            localStorage.setItem('data', JSON.stringify(data))
        })()

        return ()=>{
            setData([]);
            localStorage.clear();
        }
    }, [])

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>{item.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Users