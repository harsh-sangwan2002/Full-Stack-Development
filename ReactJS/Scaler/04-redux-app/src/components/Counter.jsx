import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/CounterSlice';

const Counter = () => {

    const [inputValue, setInputValue] = useState(1);

    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    console.log(counter);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <button onClick={() => dispatch(increment(parseInt(inputValue)))}>Increment</button>
            <h2>Count is: {counter}</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => dispatch(decrement(parseInt(inputValue)))}>Decrement</button>
        </div>
    )
}

export default Counter
