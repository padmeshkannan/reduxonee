import counterReducer from "./counters";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allreducers = combineReducers({
  countera: counterReducer,
  isLogged: loggedReducer
});

export default allreducers;
