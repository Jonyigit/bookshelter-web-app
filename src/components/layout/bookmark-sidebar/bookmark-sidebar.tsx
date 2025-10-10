import styles from "./bookmark-sidebar.module.scss";

function BookmarkSidebar() {
    return (
        <aside className={styles.sidebar} aria-label="User bookmarks">
            <div className={styles.sidebar__container}>
                <header className={styles.sidebar__header}>
                    <h2 className={styles.sidebar__title}>Bookmarks</h2>
                    <h5 className={styles.sidebar__subtitle}>
                        If you don’t like to read, you haven’t found the right book yet.
                    </h5>
                </header>

                <section className={styles.sidebar__content} aria-label="Saved bookmarked books"></section>
            </div>
        </aside>
    );
}

export default BookmarkSidebar;
