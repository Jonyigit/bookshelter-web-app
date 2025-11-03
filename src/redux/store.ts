import { legacy_createStore as createStore, combineReducers } from "redux";
import { bookmarkReducer } from "./reducers/bookmark-reducer";

const rootReducer = combineReducers({
    bookmarks: bookmarkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
