import { combineReducers } from "redux";
import Counter from "./Counter";
import logReducer from "./isLoggedIn";
const allReducers = combineReducers({
    Counter,
    logReducer,
})

export default allReducers;