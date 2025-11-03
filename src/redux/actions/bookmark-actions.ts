import type { Book } from "../../types/bookmark-types";

export const addBookmark = (book: Book) => {
    return {
        type: "ADD_BOOKMARK" as const,
        payload: book,
    };
};

export const removeBookmark = (previewLink: string) => {
    return {
        type: "REMOVE_BOOKMARK" as const,
        payload: previewLink,
    };
};
