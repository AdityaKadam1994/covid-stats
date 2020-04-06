import { createStore, combineReducers } from "redux";
import { InitialData } from "./initalData";
import { countryReducer } from "./countryreducer";

const reducer = combineReducers({
  allstats: countryReducer,
});

const store = createStore(
  (state, action) => reducer(state, action),
  InitialData
);

export default store;
