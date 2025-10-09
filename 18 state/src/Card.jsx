import { useEffect, useState } from 'react';

function Card() {

    const [count, setCount] = useState(0);

    function increment() {
        // setCount(count + 1)
        // setCount((prevCount) => {
        //     prevCount = prevCount + 1;
        //     return prevCount
        // })


        // setCount(count + 1) // 1
        // setCount(count + 1) // 2
        // setCount(count + 1) // 3
        // setCount(count + 1) // 4


        // functional update works on current state value.
        // setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)


        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Card
