import { combineReducers } from "redux";
import counterReducer from "./counterreducers";
import amountReducer from "./amountReducer";

const rootreducers = combineReducers({
    counter: counterReducer,
    amount: amountReducer
   
});
export default rootreducers;