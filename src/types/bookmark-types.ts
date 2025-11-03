export interface Book {
  title: string;
  authors: string[];
  previewLink: string;
  [key: string]: any;
}

export interface BookmarkState {
  bookmarks: Book[];
}

export type BookmarkAction =
  | { type: "ADD_BOOKMARK"; payload: Book }
  | { type: "REMOVE_BOOKMARK"; payload: string };
