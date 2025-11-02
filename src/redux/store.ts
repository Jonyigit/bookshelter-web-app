import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(rootReducer);
