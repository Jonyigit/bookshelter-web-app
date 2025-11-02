import { useEffect, useState } from "react";

import BookDetailsDrawer from "../../components/layout/book-details-drawer/book-details-drawer";
import BookmarkSidebar from "../../components/layout/bookmark-sidebar/bookmark-sidebar";
import LibraryMain from "../../components/layout/library-main/library-main";
import Header from "../../components/layout/site-header/side-header";
import styles from "./home-page.module.scss";
// import Counter from "../../components/ui/counter/counter";

function Home() {
    const [bookMarkData, setBookMarkData] = useState([]);
    const [bookData, setBookData] = useState(null);
    const [search, setSearch] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    console.log(bookMarkData);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (
        <>
            <Header setSearch={setSearch} search={search} />
            <main id={styles.main}>
                <BookmarkSidebar bookMarkData={bookMarkData} />
                <LibraryMain
                    search={search}
                    setBookData={setBookData}
                    setBookMarkData={setBookMarkData}
                    setIsModalOpen={setIsModalOpen}
                />
            </main>
            <BookDetailsDrawer bookData={bookData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            {/* <Counter /> */}
        </>
    );
}

export default Home;
