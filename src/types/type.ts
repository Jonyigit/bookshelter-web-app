import type { ReactElement, ReactNode } from "react";

export type LoginRequest = {
    username: string;
    password: string;
};

export type ReactQueryProviderProps = {
    children: ReactNode;
};

export interface UniversalButtonProps {
    type: string;
    handleClick: () => void | [];
    handleAddBookMark: () => void | [];
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PrivateRouteProps = {
    children: ReactElement;
};

export interface bookData {
    title: string;
    description?: string;
    imageLinks?: { thumbnail?: string };
    pageCount?: number;
    authors?: string[];
    previewLink?: string;
    publisher?: string;
    publishedDate?: string;
    categories?: string[];
}
