import React, { useState } from 'react';
import { connect } from 'react-redux';

function Bat({ bats, buyBat }) {
    const [qty, setQty] = useState(1);

    return (
        <div>
            <h1>Bats: {bats}</h1>
            <input
                type="number"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
            />
            <button onClick={() => buyBat(qty)}>Buy Bat</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bats: state.bat.bats
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyBat: (qty) => dispatch({ type: "BUY_BAT", payload: qty })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
