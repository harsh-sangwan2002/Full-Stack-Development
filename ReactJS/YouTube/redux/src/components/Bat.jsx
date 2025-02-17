import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Bat() {
    const [qty, setQty] = useState(1);
    const bats = useSelector(state => state.bat.bats);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Bats: {bats}</h1>
            <input
                type="number"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
            />
            <button onClick={() => dispatch({ type: "BUY_BAT", payload: qty })}>Buy Bat</button>
        </div>
    );
}


export default Bat;
