import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import ReadButton from "../read-button/read-button";
import UniversalButton from "../universal-button/universal-button";
import styles from "./book-card.module.scss";

function BookCard({ book, setBookData, setIsModalOpen, setBookMarkData }: any) {
    const { imageLinks, publishedDate, title, authors, previewLink } = book?.volumeInfo;
    const imageSrc = imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Image";

    const handleClick = () => {
        const newData = book?.volumeInfo;
        if (!newData) return;

        setBookData(newData);
    };

    const handleAddBookMark = () => {
        const newData = book?.volumeInfo;
        if (!newData) return;

        setBookMarkData((prev: any) => {
            const prevArray = Array.isArray(prev) ? prev : [];
            return [newData, ...prevArray];
        });
    };

    return (
        <article className={styles["book-card"]} itemScope itemType="https://schema.org/Book">
            <figure className={styles["card-picture"]}>
                <img src={imageSrc} alt={`Book cover of ${title}`} loading="lazy" itemProp="image" />
            </figure>

            <header className={styles.info}>
                <h2 itemProp="name" data-tooltip-id="book-title" data-tooltip-content={title}>
                    {title}
                </h2>
                <Tooltip id="book-title" place="top" className={styles["custom-tooltip"]} />
                <p itemProp="author" data-tooltip-id="book-desc" data-tooltip-content={authors?.join(",")}>
                    {authors?.join(",")}
                </p>
                <Tooltip id="book-desc" place="bottom" className={styles["custom-tooltip"]} />
                <span itemProp="datePublished">{publishedDate}</span>
            </header>

            <footer className={styles.btns}>
                <div className={styles.row}>
                    <UniversalButton type="bookmark-btn" handleClick={handleClick} handleAddBookMark={handleAddBookMark} setIsModalOpen={setIsModalOpen} />
                    <UniversalButton type="info-btn" handleClick={handleClick} handleAddBookMark={handleAddBookMark} setIsModalOpen={setIsModalOpen} />
                </div>
                <Link to={previewLink} target="_blank">
                    <ReadButton />
                </Link>
            </footer>
        </article>
    );
}

export default BookCard;
