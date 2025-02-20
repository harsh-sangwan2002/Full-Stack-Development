import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../redux/CounterSlice';

const action = counterSlice.actions;

function Counter() {

    const { count } = useSelector((store) => store.counterState);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(action.increment());
    }

    const handleDecrement = () => {
        dispatch(action.decrement());
    }

    return (
        <div>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Count value is: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter
