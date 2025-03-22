import React from 'react'
import { connect } from 'react-redux'

function Ball({ balls, buyBall, sellBall }) {
    return (
        <div>
            <h1>Balls: {balls}</h1>
            <button onClick={buyBall}>Buy Ball</button>
            <button onClick={sellBall}>Sell Ball</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        balls: state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBall: () => dispatch({ type: "BUY_BALL" }),
        sellBall: () => dispatch({ type: "SELL_BALL" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
