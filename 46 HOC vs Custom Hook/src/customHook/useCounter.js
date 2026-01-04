import { useState } from "react"

export const useCounter = (initialState) => {
    const [count, setCount] = useState(initialState);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const setByValue = (val) => {
        setCount(val);
    }

    return {
        count,
        increment,
        decrement,
        setByValue
    }
}