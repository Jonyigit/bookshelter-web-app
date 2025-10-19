import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import clsx from "clsx";

import BookDetailsDrawerSkeleton from "../../ui/book-details-drawer-skeleton/book-details-drawer-skeleton";
import ReadButton from "../../ui/read-button/read-button";
import type { BookDetailsDrawerProps } from "../../../types/book-details-drawer";
import styles from "./book-details-drawer.module.scss";

function BookDetailsDrawer({ bookData, isModalOpen, setIsModalOpen }: BookDetailsDrawerProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (bookData) {
            const timer = setTimeout(() => setLoading(false), 400);
            return () => clearTimeout(timer);
        } else {
            setLoading(true);
        }
    }, [bookData]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsModalOpen(false);
        }, 900);
    };

    const { title, description, imageLinks, pageCount, authors, previewLink, publisher, publishedDate, categories } =
        bookData! || {};

    return (
        <section
            className={clsx(styles.backdrop, {
                [styles.show]: isModalOpen && !isClosing,
                [styles.closing]: isClosing,
            })}
            onClick={handleClose}
        >
            {loading ? (
                <BookDetailsDrawerSkeleton />
            ) : (
                <aside
                    className={styles["book-details-drawer"]}
                    aria-label="Book details drawer"
                    role="dialog"
                    aria-modal="true"
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className={styles["book-details-drawer__header"]}>
                        <h1
                            className={styles["book-details-drawer__title"]}
                            data-tooltip-id="drawer-title"
                            data-tooltip-content={title}
                        >
                            {title?.length > 20 ? `${title?.slice(0, 20)}...` : title || "No title"}
                        </h1>
                        <Tooltip id="drawer-title" place="top" className={styles["custom-tooltip"]} />
                        <button
                            className={styles["book-details-drawer__close-btn"]}
                            aria-label="Close book details"
                            onClick={handleClose}
                        >
                            <IoCloseOutline aria-hidden="true" />
                        </button>
                    </header>

                    <article className={styles["book-details-drawer__content"]}>
                        <figure className={styles["book-details-drawer__image"]}>
                            <img
                                src={imageLinks?.thumbnail || "https://via.placeholder.com/230x280?text=No+Image"}
                                alt={`Book cover of ${title}`}
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>

                        <section className={styles["book-details-drawer__description"]}>
                            <p>{description || "No description available."}</p>
                        </section>

                        <section className={styles["book-details-drawer__info"]}>
                            <ul className={styles["book-details-drawer__info-list"]}>
                                <li className={styles["book-details-drawer__info-item"]}>
                                    <strong className={styles["book-details-drawer__info-label"]}>Authors:</strong>
                                    <ul className={styles["book-details-drawer__sublist"]}>
                                        {authors?.length ? (
                                            authors.map((author, index) => (
                                                <li key={index} className={styles["book-details-drawer__subitem"]}>
                                                    {author}
                                                </li>
                                            ))
                                        ) : (
                                            <li className={styles["book-details-drawer__subitem"]}>Unknown</li>
                                        )}
                                    </ul>
                                </li>
                                <li className={styles["book-details-drawer__info-item"]}>
                                    <strong className={styles["book-details-drawer__info-label"]}>Published:</strong>
                                    <ul className={styles["book-details-drawer__sublist"]}>
                                        <li className={styles["book-details-drawer__subitem"]}>
                                            {publishedDate || "Unknown"}
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles["book-details-drawer__info-item"]}>
                                    <strong className={styles["book-details-drawer__info-label"]}>Publisher:</strong>
                                    <ul className={styles["book-details-drawer__sublist"]}>
                                        <li className={styles["book-details-drawer__subitem"]}>
                                            {publisher || "Not available"}
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles["book-details-drawer__info-item"]}>
                                    <strong className={styles["book-details-drawer__info-label"]}>Categories:</strong>
                                    <ul className={styles["book-details-drawer__sublist"]}>
                                        {categories?.length ? (
                                            categories.map((category, index) => (
                                                <li key={index} className={styles["book-details-drawer__subitem"]}>
                                                    {category}
                                                </li>
                                            ))
                                        ) : (
                                            <li className={styles["book-details-drawer__subitem"]}>Not specified</li>
                                        )}
                                    </ul>
                                </li>
                                <li className={styles["book-details-drawer__info-item"]}>
                                    <strong className={styles["book-details-drawer__info-label"]}>Page Count:</strong>
                                    <ul className={styles["book-details-drawer__sublist"]}>
                                        <li className={styles["book-details-drawer__subitem"]}>
                                            {pageCount || "Unknown"}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                    </article>

                    <footer className={styles["book-details-drawer__footer"]}>
                        {previewLink && (
                            <Link to={previewLink} target="_blank">
                                <ReadButton />
                            </Link>
                        )}
                    </footer>
                </aside>
            )}
        </section>
    );
}

export default BookDetailsDrawer;
