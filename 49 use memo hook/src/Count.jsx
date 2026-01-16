import { useState, useMemo } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    const [expensiveResult, setExpensiveResult] = useState(0);
    const [quantity, setQuantity] = useState(1)

    const expensiveTask = () => {
        for (let i = 1; i <= 2000000000; i++) { }
        const randomNo = Math.floor(Math.random() * 10)
        return randomNo;
    }

    useMemo(() => {
        const result = expensiveTask();
        setExpensiveResult(result);
        return result;
    }, [quantity])

    return (
        <>
            <h1>{expensiveResult}</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <button onClick={() => setQuantity(quantity + 1)}>Quantity: {quantity}</button>
            <input value={quantity} type="number" onChange={(e) => setQuantity(e.target.value)} placeholder='Enter quantity' />
        </>
    )
}

export default Count