import { combineReducers } from "redux";
import BallReducer from "./BallReducer";
import BatReducer from "./BatReducer";

const RootReducer = combineReducers({
    ball: BallReducer,
    bat: BatReducer
})

export default RootReducer;