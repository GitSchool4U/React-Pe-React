import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {

    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const storeValue = useSelector(state => state.counter.value);

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleChangeByValue = () => {
        dispatch(changeByValue(value))
    }

    return (
        <div>
            <h2>{storeValue}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <input className='border' type="number" onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleChangeByValue}>Change By Value</button>
        </div>
    )
}

export default Counter