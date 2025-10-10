import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "../../../hooks/useDebounce";

import BookCardSkeleton from "../../ui/book-card-skeleton/book-card-skeleton";
import SearchEmpty from "../../ui/search-empty/search-empty";
import type { GoogleBooksResponse, GoogleBookItem } from "../../../types/google-books";
import BookCard from "../../ui/book-card/book-card";
import rightArrow from "../../../assets/icons/right.svg";
import styles from "./library-main.module.scss";

function LibraryMain({ search }: any) {
    const debouncedSearch = useDebounce(search, 600);

    const fetchBooks = (query: string): Promise<GoogleBookItem[]> => {
        const searchTerm = query?.trim() ? query : "search+terms";
        return axios
            .get<GoogleBooksResponse>(
                `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=1&maxResults=9`
            )
            .then((response) => response.data.items ?? []);
    };

    const { data: books, isLoading } = useQuery<GoogleBookItem[]>({
        queryKey: ["books", debouncedSearch || "default"],
        queryFn: () => fetchBooks(debouncedSearch),
        staleTime: 1000 * 60 * 2,
    });

    if (!isLoading && (!books || books.length === 0)) {
        return <SearchEmpty />;
    }

    return (
        <main className={styles.library} aria-labelledby="library-title">
            <div className={styles.library__container}>
                <section className={styles.library__grid} aria-label="Book list section">
                    {isLoading
                        ? [...Array(6)].map((_, i) => <BookCardSkeleton key={i} />)
                        : books?.map((item: GoogleBookItem) => <BookCard key={item.id} book={item} />)}
                </section>

                {!isLoading && (
                    <nav className={styles.library__pagination} aria-label="Pagination navigation">
                        <button className={styles["library__pagination-button"]} aria-label="Previous page">
                            <img src={rightArrow} alt="right arrow icon svg" className={styles.left} />
                        </button>

                        <ul className={styles["library__pagination-pages"]}>
                            <li className={styles["library__page"]} aria-current="page">
                                1
                            </li>
                            <li className={styles["library__page"]}>2</li>
                            <li className={styles["library__page"]}>...</li>
                            <li className={styles["library__page"]}>9</li>
                            <li className={styles["library__page"]}>10</li>
                        </ul>

                        <button className={styles["library__pagination-button"]} aria-label="Next page">
                            <img src={rightArrow} alt="right arrow icon svg" />
                        </button>
                    </nav>
                )}
            </div>
        </main>
    );
}

export default LibraryMain;
