export interface BookDetailsDrawerProps {
    bookData: {
        title: string;
        description?: string;
        imageLinks?: { thumbnail?: string };
        pageCount?: number;
        authors?: string[];
        previewLink?: string;
        publisher?: string;
        publishedDate?: string;
        categories?: string[];
    } | null;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}