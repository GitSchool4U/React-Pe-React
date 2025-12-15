import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
    weatherDetails: weatherReducer,
})

export default rootReducer;