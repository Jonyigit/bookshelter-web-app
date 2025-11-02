import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useDebounce } from "../../../hooks/useDebounce";
import { getPageNumbers } from "../../../lib/functions/pagination";

import { fetchBooks } from "../../../api/fetch-books";
import BookCardSkeleton from "../../ui/book-card-skeleton/book-card-skeleton";
import SearchEmpty from "../../ui/search-empty/search-empty";
import BookCard from "../../ui/book-card/book-card";
import type { GoogleBookItem } from "../../../types/google-books";
import rightArrow from "../../../assets/icons/right.svg";
import styles from "./library-main.module.scss";

function LibraryMain({ search, setBookData, setIsModalOpen, setBookMarkData }: any) {
    const [currentPage, setCurrentPage] = useState(1);
    const debouncedSearch = useDebounce(search, 600);
    const maxResults = 9;
    const totalPages = 34;

    const {
        data: books,
        isLoading,
        isFetching,
    } = useQuery<GoogleBookItem[]>({
        queryKey: ["books", debouncedSearch, currentPage],
        queryFn: () => fetchBooks(debouncedSearch, currentPage, maxResults),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60 * 2,
    });

    const handlePageClick = (page: number | string) => {
        if (page === "...") return;
        setCurrentPage(Number(page));
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    if (!isLoading && (!books || books.length === 0)) {
        return <SearchEmpty />;
    }

    return (
        <main className={styles.library} aria-labelledby="library-title">
            <div className={styles.library__container}>
                <section className={styles.library__grid} aria-label="Book list section">
                    {isLoading || isFetching
                        ? [...Array(9)].map((_, i) => <BookCardSkeleton key={i} />)
                        : books?.map((item: GoogleBookItem) => <BookCard key={item.id} book={item} setBookData={setBookData} setIsModalOpen={setIsModalOpen} setBookMarkData={setBookMarkData} />)}
                </section>
                {!isLoading && (
                    <nav className={styles.library__pagination} aria-label="Pagination navigation">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={styles["library__pagination-button"]}
                            aria-label="Previous page"
                        >
                            <img src={rightArrow} alt="left arrow icon" className={styles.left} />
                        </button>

                        <ul className={styles["library__pagination-pages"]}>
                            {getPageNumbers(currentPage, totalPages).map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handlePageClick(item)}
                                    className={`${styles["library__page"]} ${
                                        item === currentPage ? styles.active : ""
                                    }`}
                                    aria-current={item === currentPage ? "page" : undefined}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={styles["library__pagination-button"]}
                            aria-label="Next page"
                        >
                            <img src={rightArrow} alt="right arrow icon" />
                        </button>
                    </nav>
                )}
            </div>
        </main>
    );
}

export default LibraryMain;
