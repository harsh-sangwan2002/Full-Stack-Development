// Defines initial state
const initialState = {
    bats: 20
}

const BatReducer = (state = initialState, action) => {

    switch (action.type) {

        case "BUY_BAT":
            return {
                ...state,
                bats: state.bats - action.payload
            }

        default: return state
    }
}

export default BatReducer;