import { combineReducers } from "redux";
import empReducers from "./Reducer";

const rootReducer = combineReducers({
    emps: empReducers
})

export default rootReducer;