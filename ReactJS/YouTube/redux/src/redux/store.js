import { createStore } from "redux";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// Creates global store
const store = createStore(RootReducer, composeWithDevTools());

export default store;