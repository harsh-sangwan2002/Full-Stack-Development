// Defines initial state
const initialState = {
    balls: 50
}

const BallReducer = (state = initialState, action) => {

    switch (action.type) {

        case "BUY_BALL":
            return {
                ...state,
                balls: state.balls - 1
            }

        case "SELL_BALL":
            return {
                ...state,
                balls: state.balls + 1
            }

        default: return state
    }
}

export default BallReducer;