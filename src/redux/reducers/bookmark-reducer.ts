import type { BookmarkAction, BookmarkState } from "../../types/bookmark-types";

const initialState: BookmarkState = {
    bookmarks: [],
};

export const bookmarkReducer = (state: BookmarkState = initialState, action: BookmarkAction): BookmarkState => {
    switch (action.type) {
        case "ADD_BOOKMARK":
            const exists = state.bookmarks.some((b) => b.previewLink === action.payload.previewLink);
            if (exists) return state;
            return {
                ...state,
                bookmarks: [action.payload, ...state.bookmarks],
            };

        case "REMOVE_BOOKMARK":
            return {
                ...state,
                bookmarks: state.bookmarks.filter((b) => b.previewLink !== action.payload),
            };

        default:
            return state;
    }
};
