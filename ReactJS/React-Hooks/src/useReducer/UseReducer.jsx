import React, { useReducer } from 'react'
import { use } from 'react';

function reducer(state, action) {
    const { type } = action;

    switch (type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

    return (
        <div className='container'>
            <div>Count: {count}</div>
            {state.error && <div style={{ color: 'red' }}>{state.error}</div>}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div >
    )
}

